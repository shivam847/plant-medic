import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">Plant Medic</div>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/LandingPage">Disease Detection</Link>
        <Link to="/prevent">Prevention</Link>
      </div>
    </div>
  );
};

export default Header;
