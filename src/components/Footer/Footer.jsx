import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerdiv">
      <div className="item">
        <h5>More</h5>
        <span>Cookies</span>
        <span>Terms & Conditions</span>
      </div>

      <div className="item">
        <h5>Links</h5>
        <span>
        </span>
        <span>FAQS</span>
      </div>

      <div className="item">
        <h5>Join us</h5>
        <span>Reviews</span>
        <span>Blog</span>
        <span>About Daniel</span>
      </div>

      <div className="item">
        <h5>Contact</h5>
        <span>+625-36-48-10</span>
        <span>Daniel@gmail.com</span>
      </div>
    </div>
  );
};

export default Footer;
