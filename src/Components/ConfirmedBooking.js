import React from 'react';
import '../App.css';
import Footer from '../Footer'
import CustomersSay from './CustomersSay';  
import './Booking.css'
import checkIcon from '../Icons/check.png'

const ConfirmedBooking = () => {
  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <h1>RESERVATION</h1>
        <div className="confirmation-message">
          <h2>Booking Confirmed!</h2>
          <img src={checkIcon} alt='check' className='section-icon' />
          <p>Thank you for your reservation at Little Lemon.</p>
        </div>
      </div>
    <CustomersSay className="booking-customers" />
    <Footer />
    </div>
  );
};

export default ConfirmedBooking;
