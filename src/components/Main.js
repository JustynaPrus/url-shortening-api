import React from "react";
import brand from "../images/icon-brand-recognition.svg";
import detailed from "../images/icon-detailed-records.svg";
import fullyCustomizable from "../images/icon-fully-customizable.svg";
import {
  Cirle,
  MainWrapper,
  StyledArticle,
  StyledParagraph,
  Container,
  StyledDiv,
} from "./Main.styles";

const Main = () => {
  return (
    <MainWrapper>
      <h2>Advanced Statistics</h2>
      <StyledParagraph>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </StyledParagraph>
      <Container>
        <StyledArticle>
          <Cirle>
            <img src={brand} alt="brand" />
          </Cirle>

          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </StyledArticle>
        <StyledArticle>
          <Cirle>
            <img src={detailed} alt="brand" />
          </Cirle>

          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </StyledArticle>
        <StyledArticle>
          <Cirle>
            <img src={fullyCustomizable} alt="brand" />
          </Cirle>

          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </StyledArticle>
        <StyledDiv />
      </Container>
    </MainWrapper>
  );
};

export default Main;
