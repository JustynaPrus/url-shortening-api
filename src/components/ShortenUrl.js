import React from "react";
import { StyledSection } from "./ShortenUrl.styles";

const ShortenUrl = () => {
  return (
    <StyledSection>
      <input type="text" placeholder="Shorten a link here..." />
      <button>Shorten It!</button>
    </StyledSection>
  );
};

export default ShortenUrl;
