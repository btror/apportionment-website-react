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
            <Link to="/" id='nav-link'>Home</Link>
          </Nav.Link>
          <Nav.Link id="nav-item">
            <Link to="/about" id='nav-link'>About</Link>
          </Nav.Link>
          <NavDropdown title="Calculators " id="nav-item">
            <NavDropdown.Item>
              <Link to='/calculators/hamilton' id='nav-link'>Hamilton's method</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <Link to='/calculators/jefferson' id='nav-link'>Jefferson's method</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <Link to='/calculators/adam' id='nav-link'>Adam's method</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <Link to='/calculators/webster' id='nav-link'>Webster's method</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
