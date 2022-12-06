import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
        <header className="header">
            <NavLink to="/" className="button">
              <img id="logo" src={require("./fern-logo.png")} alt="logo"/>
            </NavLink>
            
            <nav>
            <NavLink to="/Home" className="button">
                    Home
                </NavLink>

                <NavLink to="/About" className="button">
                    About
                </NavLink>
                <br></br>
                <NavLink to="/PlantList" className="button">
                    Shop Plants
                </NavLink>

            </nav>
        </header>
    </div>
  );
};

export default Header;