import React, { useEffect } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function Login() {
  return (
    <div id="loginContainer">
      <h1 className="text-primary">Login</h1>
      <Form id="login">
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button id="loginSubmit" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Login
