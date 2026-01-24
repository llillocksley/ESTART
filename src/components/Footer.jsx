import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedinIn,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      {/* ===== Top Footer ===== */}
      <div className="footer-main container">
        {/* Brand */}
        <div className="footer-brand">
          <Logo />
          <p className="footer-description">
            Building data-driven transport, logistics, and digital solutions
            with a focus on performance, reliability, and growth.
          </p>
        </div>

        {/* Navigation */}
        <nav className="footer-nav" aria-label="Footer Navigation">
          <div className="footer-column">
            <h4>Solutions</h4>
            <ul>
              <li><Link to="/FleetTracker">Fleet Tracker</Link></li>
              <li><Link to="/projects">Vehicle Reports</Link></li>
              <li><Link to="/projects">Driver Analytics</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/goals">Vision &amp; Goals</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Portfolio</h4>
            <ul>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/projects">Case Studies</Link></li>
              <li><Link to="/projects">Demo Showcase</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:emekalocksley@gmail.com">Email</a></li>
              <li>
                <a href="https://github.com/llillocksley" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://wa.me/2348139222806" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Social */}
        <div className="footer-socials">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://twitter.com/BIIGLOCKSLEY" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://linkedin.com/in/Emeka-Goodness-Locksley" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://wa.me/2348139222806" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://youtube.com/BIIGLOCKSLEY" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>

      {/* ===== Bottom Footer ===== */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>© {new Date().getFullYear()} Emeka Locksley. All rights reserved.</p>
          <p className="footer-credit">
            Designed & engineered with precision and continuous improvement.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
