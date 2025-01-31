import React, { useState } from 'react';
import '../App.css';
import BookingForm from './BookingForm';

function BookingPage({ availableTimes }) {
  // Definir variables de estado para cada campo del formulario
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [reservationStatus, setReservationStatus] = useState(null);

  // Manejar cambios en los campos del formulario
  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGuestsChange = (e) => setGuests(e.target.value);
  const handleOccasionChange = (e) => setOccasion(e.target.value);

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir la lógica para enviar los datos a un servidor
    // Por ahora, simplemente actualizaremos el estado de la reserva
    setReservationStatus('Reservation successful!');
  };

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
      {reservationStatus && <p>{reservationStatus}</p>}
    </section>
  );
}

export default BookingPage; 