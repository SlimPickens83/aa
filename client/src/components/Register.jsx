import React, { useEffect } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function Register() {
  return (
    <div id="registerContainer">
      <h1 className="text-primary">Registration</h1>
      <Form id="register">
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Please create a username.</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Please enter a valid email address.</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Please create a secure password.</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button id="regSubmit" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Register
