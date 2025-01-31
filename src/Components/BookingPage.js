import React, { useState } from 'react';
import '../App.css';
import BookingForm from './BookingForm';

function BookingPage() {
  // Definir variables de estado para cada campo del formulario
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00'
  ]);

  // Manejar cambios en los campos del formulario
  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  return (
    <section className="booking-page">
      <h2>Book a Table</h2>
      <BookingForm
        date={date}
        time={time}
        guests={guests}
        occasion={occasion}
        availableTimes={availableTimes}
        handleDateChange={handleDateChange}
        handleTimeChange={handleTimeChange}
        handleGuestsChange={handleGuestsChange}
        handleOccasionChange={handleOccasionChange}
      />
    </section>
  );
}

export default BookingPage; 