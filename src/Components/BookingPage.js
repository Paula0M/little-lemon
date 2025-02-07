import { useState } from 'react';
import BookingForm from './BookingForm';
import '../App.css';

function BookingPage({ availableTimes, dispatch }) {
  // Estado del formulario
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('Birthday'); // Valor inicial

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');

    // Resetear valores después de enviar el formulario
    setName('');
    setDate('');
    setTime('');
    setGuests('');
    setOccasion('Birthday');
  };

  return (
    <section className="booking-page">
      <h2>Book a Table</h2>
      <BookingForm
        name={name} setName={setName}
        date={date} setDate={setDate}
        time={time} setTime={setTime}
        guests={guests} setGuests={setGuests}
        occasion={occasion} setOccasion={setOccasion}
        availableTimes={availableTimes}
        dispatch={dispatch}
        handleSubmit={handleSubmit}
      />
    </section>
  );
}

export default BookingPage;