import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import BookingPage from './Components/BookingPage';
import { fetchAPI } from './api';  // Importamos la función fetchAPI desde api.js

// Función para obtener los horarios disponibles para la fecha actual (hoy)
const initializeTimes = () => {
  const today = new Date(); // Creamos un objeto Date para hoy
  return fetchAPI(today); // Usamos la función fetchAPI para obtener los horarios disponibles
};

// Reducer para actualizar availableTimes en función de la fecha seleccionada
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const selectedDate = new Date(action.payload); // Creamos un objeto Date para la fecha seleccionada
      console.log(`Nueva fecha seleccionada: ${selectedDate}`);
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