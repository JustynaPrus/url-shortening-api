import React from "react";
import logo from "../../images/logo.svg";
import { StyledNav } from "./MobileNavigation.styles";

const DesktopNavigation = () => {
  return (
    <StyledNav>
      <img src={logo} alt="logo" />
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
    </StyledNav>
  );
};

export default DesktopNavigation;
