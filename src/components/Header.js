import React from "react";
import working from "../images/illustration-working.svg";

const Header = () => {
  return (
    <header>
      <img src={working} alt="working" />
      <h1>More than just shorter links</h1>
      <p>
        Build your brand's recognition and get detailed insights on how your
        links are performing.
      </p>
      <button>Get Started</button>
    </header>
  );
};

export default Header;
