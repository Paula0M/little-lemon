import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import BookingForm from './BookingForm';
import '../App.css';
import Footer from '../Footer'
import CustomersSay from './CustomersSay';
import './Booking.css'

function BookingPage({ availableTimes, dispatch }) {
  // Estado del formulario
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('Birthday'); // Valor inicial

  const navigate = useNavigate(); // Initialize navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');

    // Resetear valores después de enviar el formulario
    setName('');
    setDate('');
    setTime('');
    setGuests('');
    setOccasion('Birthday');

    // Redirect to the confirmation page
    navigate('/confirmed');
  };

  return (
    <section className="booking-page" role="main" aria-label="Booking Page">
      <div className="booking-inside">
        <div className="booking-background">
        <h1 id="booking-heading">RESERVATION</h1>
          <BookingForm
            name={name} setName={setName}
            date={date} setDate={setDate}
            time={time} setTime={setTime}
            guests={guests} setGuests={setGuests}
            occasion={occasion} setOccasion={setOccasion}
            availableTimes={availableTimes}
            dispatch={dispatch}
            handleSubmit={handleSubmit}
            aria-labelledby="booking-heading"
          />
        </div>
      </div>
        <CustomersSay className="booking-customers" aria-label="Customer Testimonials" />
        <Footer aria-label="Footer" />
    </section>
  );
}

export default BookingPage;