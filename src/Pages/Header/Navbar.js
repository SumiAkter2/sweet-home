import React from "react";
import "./Navbar.css";
// import logo from "../../../public/sweet home logo.png";
const Navbar = () => {
  return (
    <nav className="navbar-content">
      <div className="logo">
        <img
          src="https://i.ibb.co/MkyGttz/sweet-home-logo.png"
          alt="home-logo"
        />
        <h1>Sweet Home</h1>
      </div>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/login">Log In</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
