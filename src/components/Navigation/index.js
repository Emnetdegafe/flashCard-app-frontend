import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
// import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);

  return (
    <Navbar style={{ background: "#006d17" }} expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        Flash
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          {token && <LoggedIn />}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
