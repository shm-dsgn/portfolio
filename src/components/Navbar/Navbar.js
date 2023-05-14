import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { List, X } from "@phosphor-icons/react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    setShowMenu(!showMenu);
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#E2FF00" : "white",
    };
  };
  return (
    <div className="navbar">
      <nav className="navbar-block">
        <NavLink to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </NavLink>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {!showMenu ? (
            <List size={24} color="white" weight="bold" />
          ) : (
            <X size={24} color="#E2FF00" weight="bold" />
          )}
        </div>
        <div className={`nav-links ${showNavbar && "active"}`}>
          <NavLink to="/about" style={navLinkStyles}>
            <div className="about link">About</div>
          </NavLink>
          <NavLink to="/projects" style={navLinkStyles}>
            <div className="projects link">Projects</div>
          </NavLink>
          <NavLink to="/contact" style={navLinkStyles}>
            <div className="contact link">Contact</div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
