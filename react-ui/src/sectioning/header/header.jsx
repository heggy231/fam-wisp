import React from "react";
import { NavLink } from "react-router-dom";
import Greeting from "../../components/greeting";
import "./style.css";


const Header = () => {
  return (
    <div>
      <header>
        {/* NavLink must have `to` attrib */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <Greeting someName="Jackie"/>
      </header>
    </div>
  )
};

export default Header;
