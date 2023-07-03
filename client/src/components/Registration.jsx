import React, { useState, useEffect, useContext } from "react"
import Axios from "axios"
import { useImmer, useImmerReducer } from "use-immer"
import DispatchContext from "../DispatchContext"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function Registration() {
  const appDispatch = useContext(DispatchContext)

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
      case "submitForm":
        if (draft.username.value && draft.email.value && draft.password.value) {
          draft.submitCount++
        }
        return
    }
  }

  const [state, dispatch] = useImmerReducer(regReducer, initialState)

  useEffect(() => {
    if (state.submitCount) {
      const ourRequest = Axios.CancelToken.source()
      async function fetchResults() {
        try {
          const response = await Axios.post("/register", { username: state.username.value, email: state.email.value, password: state.password.value })
          appDispatch({ type: "register" })
        } catch (e) {
          console.log("There was a problem or the request was canceled.")
        }
      }
      fetchResults()
      return () => ourRequest.cancel()
    }
  }, [state.submitCount])

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ type: "username", value: state.username.value })
    dispatch({ type: "email", value: state.email.value })
    dispatch({ type: "password", value: state.password.value })
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

        <Button id="regSubmit" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Registration
