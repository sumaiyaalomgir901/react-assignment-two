import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="head-content">
        <h1>Turag Coaching Center</h1>

        <nav>
          <NavLink className="link" to="/home">
            Home
          </NavLink>
          <NavLink className="link" to="/service">
            Service
          </NavLink>
          <NavLink className="link" to="/blog">
            Blog
          </NavLink>
          <NavLink className="link" to="/about">
            About
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
