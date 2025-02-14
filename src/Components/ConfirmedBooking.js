import React from 'react';
import '../App.css';
import Footer from '../Footer'
import CustomersSay from './CustomersSay';  
import './Booking.css'
import checkIcon from '../Icons/check.png'

const ConfirmedBooking = () => {
  return (
    <div className="confirmation-container" role="main" aria-label="Booking Confirmation">
      <div className="confirmation-content">
      <h1 id="confirmation-heading">RESERVATION</h1>
        <div className="confirmation-message" aria-live="polite" aria-labelledby="confirmation-heading">
          <h2>Booking Confirmed!</h2>
          <img src={checkIcon} alt='Check mark icon indicating successful booking' className='section-icon' />
          <p>Thank you for your reservation at Little Lemon.</p>
        </div>
      </div>
    <CustomersSay className="booking-customers" aria-label="Customer Testimonials" />
    <Footer aria-label="Footer" />
    </div>
  );
};

export default ConfirmedBooking;
