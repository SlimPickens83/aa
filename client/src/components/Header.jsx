import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

function Header() {
  return (
    <Navbar expand="lg" data-bs-theme="dark" style={{ backgroundColor: "#025ADE" }}>
      <Container>
        <Link to="/" className="navbar-brand text-white">
          {" "}
          AccountAbility Pittsburgh{" "}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown className="btn-primary" title="Client Portal" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Sign In</NavDropdown.Item>
              <NavDropdown.Item href="/registration">Register</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/commissions">CommissionsPro</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
