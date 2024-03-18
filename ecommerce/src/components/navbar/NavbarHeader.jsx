import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import company_logo from "../assets/logo.png";
import "./navbar.scss";
import { BsCart3 } from "react-icons/bs";

const NavbarHeader = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary border-bottom" sticky="top" 
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img src={company_logo} alt="company_logo" title="company_logo" />
          <span className="ms-2 align-self-end">Hmart</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/">Shop</Nav.Link>
            <Nav.Link href="/mens">Men</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/Women">Women</Nav.Link>
            <Nav.Link href="/Kids">Kids</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login" className="remove_underline">
            <Button variant="outline-secondary" className="rounded-pill">Logout</Button></Nav.Link>
            <Nav.Link eventKey={2} href="/cart" className="remove_underline">
              <Button className="position-relative cart-btn ms-4">
              <BsCart3 />
  <span className="position-absolute top-0 start-100 translate-middle bg-danger border border-light rounded-circle text-white">4
  </span>
</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;
