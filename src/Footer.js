import React from 'react';
import './App.css'; // Import the CSS file for styling'
import logo from './Assets/logo2.svg'; // Import the logo

function Footer() {
    return (
        <footer className="footer">
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
                <h4>Social Media Links</h4>
                <p>Address</p>
                <p>Phone Number</p>
                <p>Email</p>
            </div>
        </footer>
    );
}

export default Footer;