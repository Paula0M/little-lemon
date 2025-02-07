import React from 'react';

const ConfirmedBooking = () => {
  return (
    <div className="confirmation-container">
      <div className="confirmation-message">
        <h2>Booking Confirmed!</h2>
        <p>Thank you for your reservation at Little Lemon.</p>
        <div className="check-icon" style={{ fontSize: '3rem', color: '#495E57', margin: '1rem' }}>
          ✓
        </div>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
