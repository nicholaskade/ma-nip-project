import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
        <header>
            Hello, I am the Header!
            <NavLink to="/" className="button">
              <img id="logo" src={require("./fern-logo.png")}/>
            </NavLink>
            
            <nav>

                <NavLink to="/about" className="button">
                    About
                </NavLink>

                <NavLink to="/shopplants" className="button">
                    Shop Plants
                </NavLink>

            </nav>
        </header>
    </div>
  );
};

export default Header;