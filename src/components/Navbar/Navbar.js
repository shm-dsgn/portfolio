import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { List, X, DownloadSimple } from "@phosphor-icons/react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
    setShowMenu(!showMenu);
  };

  const closeNavBar = () => {
    setShowNavbar(!showNavbar);
    setShowMenu(!showMenu);
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#E2FF00" : "white",
      textDecoration: isActive? "underline" :"none",
      fontWeight: isActive? "bold" :"normal",
    };
  };
  return (
    <div className="navbar">
      <nav className="navbar-block">
        <NavLink to="/">
          <img src={logo} className="App-logo" alt="logo" width="128" height="41"/>
        </NavLink>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {!showMenu ? (
            <List size={28} color="white" weight="bold" />
          ) : (
            <X size={28} color="#E2FF00" weight="bold" />
          )}
        </div>
        <div className={`nav-links ${showNavbar && "active"}`}>
          <NavLink to="/" style={navLinkStyles}>
            <div className="link" onClick={closeNavBar}>
              Home
            </div>
          </NavLink>
          <NavLink to="/projects" style={navLinkStyles}>
            <div className="link" onClick={closeNavBar}>
              Projects
            </div>
          </NavLink>
          <NavLink to="/contact" style={navLinkStyles}>
            <div className="link" onClick={closeNavBar}>
              Contact
            </div>
          </NavLink>
          <a
            className="resume link"
            href="https://drive.google.com/file/d/1-1-9ht1R1086T9KF3m0Ooy4swHL-NFPv/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            Resume/CV &nbsp;
            <DownloadSimple weight="bold" size={16} alt="download logo"/>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
