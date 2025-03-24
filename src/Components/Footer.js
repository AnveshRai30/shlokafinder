import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <FooterWrapper>
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-logo">
            <Link to="/">
              <img src="/images/logo3.png" alt="logo" />
            </Link>
            <p>
              A <strong>Shloka</strong> is a Sanskrit verse, often found in ancient scriptures like
              the Vedas and the Bhagavad Gita. It follows a specific meter and rhythm, conveying
              profound spiritual, philosophical, and moral teachings.
            </p>
          </div>

          {/* Useful Links */}
          <div className="footer-links">
            <h2>Quick Links</h2>
            <ul>
              <li onClick={scrollToTop}>
                <Link to="/">
                  <BiChevronRight className="icon" /> Home
                </Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/about">
                  <BiChevronRight className="icon" /> About
                </Link>
              </li>
              <li onClick={scrollToTop}>
                <Link to="/contact">
                  <BiChevronRight className="icon" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-social">
            <h2>Connect With Me</h2>
            <ul>
              <li>
                <a href="https://www.instagram.com/">
                  <AiFillInstagram className="social-icon instagram" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in//">
                  <AiFillLinkedin className="social-icon linkedin" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/">
                  <AiFillGithub className="social-icon github" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-line"></div>
          <p>© 2025 All Rights Reserved </p>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: white;
  padding: 3rem 0;
  text-align: center;

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .footer-top {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    justify-items: center;
    padding-bottom: 2rem;
  }

  .footer-logo {
    text-align: left;
    max-width: 300px;
  }

  .footer-logo img {
    width: 140px;
    margin-bottom: 1rem;
  }

  .footer-logo p {
    font-size: 0.9rem;
    line-height: 1.6;
    opacity: 0.8;
  }

  .footer-links,
  .footer-social {
    text-align: left;
  }

  .footer-links h2,
  .footer-social h2 {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #f4a261;
  }

  .footer-links ul,
  .footer-social ul {
    list-style: none;
    padding: 0;
  }

  .footer-links li,
  .footer-social li {
    margin-bottom: 0.8rem;
  }

  .footer-links a,
  .footer-social a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    display: flex;
    align-items: center;
    transition: color 0.3s ease-in-out;
  }

  .footer-links a:hover,
  .footer-social a:hover {
    color: #f4a261;
  }

  .icon {
    font-size: 1.3rem;
    margin-right: 0.5rem;
    color: #f4a261;
  }

  .social-icon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
    transition: transform 0.3s ease-in-out;
  }

  .instagram {
    color: #e1306c;
  }

  .linkedin {
    color: #0077b5;
  }

  .github {
    color: #ffffff;
  }

  .social-icon:hover {
    transform: scale(1.2);
  }

  .footer-bottom {
    text-align: center;
    padding-top: 1.5rem;
  }

  .footer-line {
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    margin-bottom: 1rem;
  }

  .footer-bottom p {
    font-size: 0.9rem;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    .footer-top {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .footer-logo,
    .footer-links,
    .footer-social {
      text-align: center;
    }

    .footer-links a,
    .footer-social a {
      justify-content: center;
    }
  }
`;
