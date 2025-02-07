import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import BookingPage from './Components/BookingPage';
import { fetchAPI } from './api';

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

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
      </Routes>
    </main>
  );
}

export default Main;