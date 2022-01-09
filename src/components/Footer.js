import React from "react";
import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <h4>Features</h4>
      <p>Link Shortening</p>
      <p>Branded Links</p>
      <p>Analytics</p>
      <h4>Resources</h4>
      <p>Blog</p>
      <p>Developers</p>
      <p>Support</p>
      <h4>Company</h4>
      <p>About</p>
      <p>Our Team</p>
      <p>Careers</p>
      <p>Contact</p>
      <div class="attribution">
        <p>Challenge by </p>
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor.
        </a>
        <p>
          Coded by <a href="https://github.com/JustynaPrus">Justyna Pruś.</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
