import React from "react";
import logo from "../images/logo.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
import facebook from "../images/icon-facebook.svg";
import {
  FooterWrapper,
  StyledImg,
  ImgWrapper,
  InfoBox,
  Container,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <StyledImg src={logo} alt="logo" />
        <div>
          <h4>Features</h4>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div>
          <h4>Resources</h4>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div>
          <h4>Company</h4>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <ImgWrapper>
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={pinterest} alt="pinterest" />
          <img src={instagram} alt="instagram" />
        </ImgWrapper>
      </Container>
      <InfoBox>
        <p>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor.
            <br />
          </a>
          Coded by <a href="https://github.com/JustynaPrus">Justyna Pruś.</a>
        </p>
      </InfoBox>
    </FooterWrapper>
  );
};

export default Footer;
