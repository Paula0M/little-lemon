import React from 'react';
import './App.css';

function BookingPage() {
  return (
    <section className="booking-page">
      <h2>Book a Table</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" required />
        
        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" required />
        
        <label htmlFor="guests">Number of Guests:</label>
        <input type="number" id="guests" name="guests" required />
        
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
}

export default BookingPage;