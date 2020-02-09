import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
import logo from "../../shared/assets/logo.png";

import "./style.scss";

const Header = () => {
  return (
    <header className="full-width">
      <Navbar collapseOnSelect expand="lg">
        <Link to="/">
          <img src={logo} alt="BlockBuster" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/celebrities">Celebrities</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/community">Community</NavLink>
          </Nav>
          <Nav>
            <NavLink to="/help">Help</NavLink>
            <NavLink to="/">Log In</NavLink>
            <NavLink to="/">Sign Up</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
