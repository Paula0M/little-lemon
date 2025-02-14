import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Importamos los iconos
import './App.css'; 
import logo from './Assets/logo2.png';

function Footer() {
    return (
        <footer className="footer" role="contentinfo" aria-label="Footer"                          >
            <div className="footer-content">
                {/* Logo Section */}
                <div className="footer-logo"> 
                    <img src={logo} alt="Little Lemon Logo" />
                </div>

                {/* Doormat Navigation */}
                <div className="footer-nav" aria-label="Doormat Navigation">
                <h4 id="doormat-heading">Doormat Navigation</h4>
                    <ul>
                        <li><a href="/home" aria-label="Home" tabIndex="0">Home</a></li>
                        <li><a href="/about" aria-label="About" tabIndex="0">About</a></li>
                        <li><a href="/menu" aria-label="Menu" tabIndex="0">Menu</a></li>
                        <li><a href="/reservations" aria-label="Reservations" tabIndex="0">Reservations</a></li>
                        <li><a href="/order-online" aria-label="Order Online" tabIndex="0">Order Online</a></li>
                        <li><a href="/login" aria-label="Login" tabIndex="0">Login</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-contact" aria-labelledby="contact-heading">
                    <h4 id="contact-heading">Contact</h4>
                    <p>Address</p>
                    <p>Phone Number</p>
                    <p>Email</p>
                </div>

                {/* Social Media Links */}
                <div className="footer-social" aria-labelledby="social-heading">
                    <h4 id="social-heading">Social Media</h4>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" tabIndex="0">
                            <FaFacebook />Facebook  </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" tabIndex="0">
                            <FaInstagram />Instagram </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" tabIndex="0">
                            <FaTwitter />Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
