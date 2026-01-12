import React from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import Logo from "./Logo"; // make sure Logo.jsx is in the same folder

import "../assets/css/style.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-graph-container">
        {/* Solutions */}
        <div className="footer-box">
          <h4>Solutions</h4>
          <ul>
            <li><Link to="/FleetTracker">Fleet Tracker</Link></li>
            <li><a href="#">Vehicle Reports</a></li>
            <li><a href="#">Driver Analytics</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-box">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/goals">Visions &amp; Goals</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Portfolio */}
        <div className="footer-box">
          <h4>Portfolio</h4>
          <ul>
            <li><Link to="/projects">Projects</Link></li>
            <li><a href="#">Case Studies</a></li>
            <li><a href="#">Demo Showcase</a></li>
          </ul>
        </div>

        {/* Connects */}
        <div className="footer-box">
          <h4>Connects</h4>
          <ul>
            <li><a href="mailto:emekalocksley@gmail.com">Email</a></li>
            <li><a href="https://github.com/llillocksley" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://wa.me/2348139222806" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          </ul>
        </div>

{/* Socials */} 
<div className="footer-box social-box">
  <h4>Follow Me</h4>
  <div className="social-icons">
    <a href="https://twitter.com/llillocksley" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <i className="fa-brands fa-twitter"></i>
    </a>
    <a href="https://instagram.com/lillocksley" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <i className="fa-brands fa-instagram"></i>
    </a>
    <a href="https://linkedin.com/in/Emeka-Goodness-Locksley" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <i className="fa-brands fa-linkedin-in"></i>
    </a>
    <a href="https://wa.me/2348139222806" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
      <i className="fa-brands fa-whatsapp"></i>
    </a>
    <a href="https://pinterest.com/lillocksley" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
      <i className="fa-brands fa-pinterest"></i>
    </a>
    <a href="https://youtube.com/lillocksley" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
      <i className="fa-brands fa-youtube"></i>
    </a>
  </div>
</div>

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="footer-text">
            <p>© 2025 Emeka Locksley. All rights reserved.</p>
            <p>Built with 💻, passion, and continuous learning.</p>
          </div>
          <div className="footer-logo-inline">
            <Logo />
          </div>
        </div>
      </div>
    </footer>
  );
}
