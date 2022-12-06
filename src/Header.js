import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {


  return (
    <div id="header-container">
        <header className="header">

              <img id="logo" src={require("./fern-logo.png")} alt="logo"/>

              <nav className="nav-bar">
                

                <Link to="/">
                  Home
                </Link>

                <Link to="/About">
                  About
                </Link>

                <Link to="/PlantPage">
                  Shop Plants
                </Link>
                

              </nav>
        </header>
    </div>
  );
};

export default Header;