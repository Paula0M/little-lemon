import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import BookingPage from './Components/BookingPage';

function Main() {
  // Estado de las horas disponibles
  const [availableTimes, setAvailableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} />} />
        {/* Add more routes as needed */}
      </Routes>
    </main>
  );
}
export default Main