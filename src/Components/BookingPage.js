import { useState } from 'react';
import BookingForm from './BookingForm';
import '../App.css';

function BookingPage({ availableTimes }) {
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
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name:</label>
        <input type="text" placeholder="name" name="name" value={name} onChange={e => setName(e.target.value)} required />
        
        <label htmlFor="date">Date:</label>
        <input type="date" placeholder="date" name="date" value={date}  onChange={e => setDate(e.target.value)} required />
        
        <label htmlFor="time">Time:</label>
        <input type="time" placeholder="time" name="time" value={time}  onChange={e => setTime(e.target.value)} required />
        
        <label htmlFor="guests">Number of Guests:</label>
        <input type="number" placeholder="guests" name="guests" value={guests} onChange={e => setGuests(e.target.value)} required />

        <label htmlFor='occasion'>Ocassion:</label>
        <select id='occasion' name='occasion' value={occasion} onChange={e => setOccasion(e.target.value)} required>
          <option value='Birthday'>Birthday</option>
          <option value='Anniversary'>Anniversary</option>
        </select>
        
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
}

export default BookingPage;