import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Importamos los iconos
import './App.css'; 
import logo from './Assets/logo2.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Logo Section */}
                <div className="footer-logo"> 
                    <img src={logo} alt="Little Lemon Logo" />
                </div>

                {/* Doormat Navigation */}
                <div className="footer-nav">
                    <h4>Doormat Navigation</h4>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order-online">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-contact">
                    <h4>Contact</h4>
                    <p>Address</p>
                    <p>Phone Number</p>
                    <p>Email</p>
                </div>

                {/* Social Media Links */}
                <div className="footer-social">
                    <h4>Social Media</h4>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook />Facebook  </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />Instagram </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                            Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
