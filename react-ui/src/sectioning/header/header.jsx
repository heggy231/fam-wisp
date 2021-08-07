import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <div>
      <header>
        {/* NavLink must have `to` attrib */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>
    </div>
  )
};

export default Header;
