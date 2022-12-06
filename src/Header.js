import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div id="header-container">
        <header className="header">

              <img id="logo" src={require("./fern-logo.png")} alt="logo"/>

              <nav className="nav-bar">

                <NavLink className="nav-link" to="/Home">
                  Home
                </NavLink>

                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>

                <NavLink className="nav-link" to="/PlantList">
                  Shop Plants
                </NavLink>

              </nav>
        </header>
    </div>
  );
};

export default Header;