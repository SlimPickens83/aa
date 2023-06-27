import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

function Header() {
  return (
    <Navbar expand="lg" bg="primary" data-bs-theme="dark">
      <Container>
        <Link to="/" className="navbar-brand text-white">
          {" "}
          AccountAbility Pittsburgh{" "}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown className="btn-primary" title="Client Portal" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Register</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">FAQ</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">CommissionsPro</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
