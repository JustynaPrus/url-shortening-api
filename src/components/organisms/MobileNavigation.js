import React, { useState } from "react";
import { FcMenu } from "react-icons/fc";
import { Wrapper, StyledUl, StyledDiv } from "./MobileNavigation.styles";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <FcMenu
        className="hamburger"
        alt="menu hamburger"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <StyledUl>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
          <StyledDiv>
            <li>Login</li>
            <button>Sign Up</button>
          </StyledDiv>
        </StyledUl>
      )}
    </Wrapper>
  );
};

export default MobileNavigation;
