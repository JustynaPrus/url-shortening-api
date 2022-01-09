import React, { useState } from "react";
import logo from "../../images/logo.svg";
import { FcMenu } from "react-icons/fc";
import { StyledNav } from "./MobileNavigation.styles";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledNav>
      <img src={logo} alt="logo" />
      <FcMenu
        className="hamburger"
        alt="menu hamburger"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
          <li>Login</li>
          <li>Sign Up</li>
        </ul>
      )}
    </StyledNav>
  );
};

export default MobileNavigation;
