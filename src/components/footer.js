import React from "react";
import './footer.css';
import logo from '../assets/swift-supply.png';
const Footer=()=>{
    return (
        <footer className="footer"> 
        <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="Your Brand Logo" className="logo-image" />
          <p>Offers product that match your business needs and elevate your operations, from whole esssentials to retail favourites</p>
          
          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Other Sections */}
        <div className="footer-links">
          <h4>WEB SITE</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>HELP</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>FAQ</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: contact@yourbrand.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <hr className="footer-divider" />
      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>Swift Supply &copy; {new Date().getFullYear()}, All Rights Reserved.</p>
      </div>
      </footer>
    );
}
 
 export default Footer;