import React from "react";
import logo from "../images/logo.svg";

const Navigation = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
    </nav>
  );
};

export default Navigation;
