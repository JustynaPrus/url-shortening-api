import React from "react";
import logo from "./../images/logo.svg";
import { Wrapper } from "./Navigation.styles";
import MobileNavigation from "./organisms/MobileNavigation";
import DesktopNavigation from "./organisms/DesktopNavigation";

const Navigation = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <div>
        <MobileNavigation />
        <DesktopNavigation />
      </div>
    </Wrapper>
  );
};

export default Navigation;
