import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className={"container"}>
      <img
        className={"logo"}
        src="https://www.google.com/chrome/static/images/fallback/chrome-logo-2023.png"
        width={"150px"}
        alt="Chrome Logo"
      />
      <ul className={"menu"}>
        <li>AI Innovations</li>
        <li>Features</li>
        <li>Safety</li>
        <li>By Google</li>
        <li>Extensions</li>
      </ul>
    </div>
  );
};

export default Navbar;
