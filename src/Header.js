import React from "react";
import { Link } from "react-router-dom";

function Header() {


  return (
    <div id="header-container">
        <header className="header">

              <img id="logo" src={require("./fern-logo.png")} alt="logo"/>

              <nav className="nav-bar">
                

                <Link className="nav-link" to="/">
                  Home
                </Link>

                <Link className="nav-link" to="/About">
                  About
                </Link>

                <Link className="nav-link" to="/PlantPage">
                  Shop Plants
                </Link>
                

              </nav>
        </header>
    </div>
  );
};

export default Header;