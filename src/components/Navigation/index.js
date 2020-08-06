import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import LoggedIn from "./LoggedIn";
// import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);

  return (
    <div className='navbar-wrapper wrapper'>
      <div className='navbar-container'>

        <NavLink to="/" className='navbar-header'>
          FLASHCARDDD
        </NavLink>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <div className='navbar-navigation'>
          {token && <LoggedIn />}
        </div>
      </div>
    </div>
  );
}
