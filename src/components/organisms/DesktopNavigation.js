import React from "react";
import { StyledNav, StyledDiv, Box } from "./DesktopNavigation.styles";

const DesktopNavigation = () => {
  return (
    <StyledNav>
      <ul>
        <StyledDiv>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </StyledDiv>
        <Box>
          <li>Login</li>
          <button>Sign Up</button>
        </Box>
      </ul>
    </StyledNav>
  );
};

export default DesktopNavigation;
