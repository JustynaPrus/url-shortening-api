import React from "react";
import working from "../images/illustration-working.svg";
import { HeaderWrapper, StyledButton } from "./Header.styles";

const Header = () => {
  return (
    <HeaderWrapper>
      <img src={working} alt="working" />
      <h1>More than just shorter links</h1>
      <p>
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <StyledButton>Get Started</StyledButton>
    </HeaderWrapper>
  );
};

export default Header;
