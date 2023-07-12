import React, { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import Axios from "axios"
import DispatchContext from "../DispatchContext"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function Login(props) {
  const appDispatch = useContext(DispatchContext)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [adminKey, setAdminKey] = useState()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const response = await Axios.post("/adminLogin", { username, password, adminKey })
      if (response.data) {
        appDispatch({ type: "login", data: response.data })
        appDispatch({ type: "adminLogin", data: response.data })
        navigate("/")
      } else {
        console.log(`Incorrect username (${username}) / password (${password})`)
      }
    } catch (e) {
      console.log("Undetermined login error.")
    }
  }

  return (
    <div id="loginContainer">
      <h1 className="text-primary">Admin Login</h1>
      <Form onSubmit={handleSubmit} id="login">
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control onChange={e => setUsername(e.target.value)} type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Admin Key</Form.Label>
          <Form.Control onChange={e => setAdminKey(e.target.value)} type="password" placeholder="Admin Key" />
        </Form.Group>

        <Button id="loginSubmit" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Login
