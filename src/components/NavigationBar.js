import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" id="navbar">
      <Navbar.Brand>Apportionment App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link id="nav-item">
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link id="nav-item">
            <Link to="/about">About</Link>
          </Nav.Link>
          <NavDropdown title="Calculators" id="nav-item">
            <NavDropdown.Item href="/calculator/hamilton">
              Hamilton's method
            </NavDropdown.Item>
            <NavDropdown.Item href="/calculator/jefferson">
              Jefferson's method
            </NavDropdown.Item>
            <NavDropdown.Item href="/calculator/adam">
              Adam's method
            </NavDropdown.Item>
            <NavDropdown.Item href="/calculator/webster">
              Webster's method
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
