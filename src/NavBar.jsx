import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <NavLink
          to="https://www.linkedin.com/in/mohamed-elsheshtawey/"
          target="_blank"
        >
          <img
            src="images/618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png"
            alt=""
          />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="NavLinks justify-content-end">
            <HashLink to="/#latest">Latest Builds</HashLink>
            <HashLink to="/#process">Process</HashLink>
            <HashLink to="/#service">Services</HashLink>
            <HashLink to="/#contact">Contact Us</HashLink>
            <NavLink to="/products">Projects</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
