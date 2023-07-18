import React, { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Axios from "axios"
import { useImmer, useImmerReducer } from "use-immer"
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function Registration() {
  const appDispatch = useContext(DispatchContext)
  const navigate = useNavigate()

  const initialState = {
    username: {
      value: "",
      hasErrors: false,
      checkCount: 0
    },
    email: {
      value: "",
      hasErrors: false,
      checkCount: 0
    },
    password: {
      value: ""
    },
    clientKey: {
      value: ""
    },
    submitCount: 0
  }

  function regReducer(draft, action) {
    switch (action.type) {
      case "username":
        draft.username.value = action.value
        return
      case "email":
        draft.email.value = action.value
        return
      case "password":
        draft.password.value = action.value
        return
      case "clientKey":
        draft.clientKey.value = action.value
        return
      case "submitForm":
        if (draft.username.value && draft.email.value && draft.password.value && draft.clientKey.value) {
          draft.submitCount++
        }
        return
    }
  }

  const [state, dispatch] = useImmerReducer(regReducer, initialState)

  const checkResponse = errorMessage => response => {
    if (response.data) return response.data
    throw new Error(errorMessage)
  }

  const clientAuth = () =>
    Axios.post("/clientAuth", { clientKey: state.clientKey.value })
      .then(checkResponse("Invalid client key."))
      .then(() => appDispatch({ type: "clientAuth" }))
      .catch(() => {
        throw new Error("Undetermined client authentication error.")
      })

  const register = () =>
    Axios.post("/register", {
      username: state.username.value,
      email: state.email.value,
      password: state.password.value
    })
      .then(checkResponse("Registration error."))
      .then(data => appDispatch({ type: "register", data }))
      .catch(() => {
        throw new Error("There was a problem or the request was canceled.")
      })

  const redirectToRoot = () => navigate("/")

  const logError = "error"

  useEffect(() => {
    if (state.submitCount) {
      console.log(state.clientKey.value)
      const ourRequest = Axios.CancelToken.source()
      clientAuth().then(register).then(redirectToRoot).catch(logError)
      return () => ourRequest.cancel()
    }
  }, [state.submitCount])

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: "username", value: state.username.value })
    dispatch({ type: "email", value: state.email.value })
    dispatch({ type: "password", value: state.password.value })
    dispatch({ type: "clientKey", value: state.clientKey.value })
    dispatch({ type: "submitForm" })
  }

  return (
    <div id="registerContainer">
      <h1 className="text-primary">Registration</h1>
      <Form onSubmit={handleSubmit} id="register">
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label style={{ fontSize: "14px" }}>Please create a username.</Form.Label>
          <Form.Control onChange={e => dispatch({ type: "username", value: e.target.value })} type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{ fontSize: "14px" }}>Please enter a valid email address.</Form.Label>
          <Form.Control onChange={e => dispatch({ type: "email", value: e.target.value })} type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontSize: "14px" }}>Please create a secure password.</Form.Label>
          <Form.Control onChange={e => dispatch({ type: "password", value: e.target.value })} type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formClientKey">
          <Form.Label style={{ fontSize: "14px" }}>Please enter a valid client key</Form.Label>
          <Form.Control onChange={e => dispatch({ type: "clientKey", value: e.target.value })} type="password" placeholder="Client Key" />
        </Form.Group>

        <div className="alert alert-info" role="alert" style={{ width: 220 }}>
          For preview purposes, visitors can use "guest" as a Client Key.
        </div>

        <Button id="regSubmit" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Registration
