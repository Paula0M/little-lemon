import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './Components/Homepage';
import BookingPage from './Components/BookingPage';
import ConfirmedBooking from './Components/ConfirmedBooking';
import { fetchAPI, submitAPI } from './api';

// Función para obtener los horarios disponibles para la fecha actual (hoy)
const initializeTimes = () => {
  const today = new Date(); 
  return fetchAPI(today);
};

// Reducer para actualizar availableTimes en función de la fecha seleccionada
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const selectedDate = new Date(action.payload);
      return fetchAPI(selectedDate); // Usamos fetchAPI para obtener los horarios de la fecha seleccionada
    default:
      return state;
  }
};

function Main() {
  // useReducer para manejar availableTimes
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const response = await submitAPI(formData);
    if (response) {
      navigate('/confirmed');
    }
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}

export default Main;