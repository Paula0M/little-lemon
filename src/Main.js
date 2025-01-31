import React, { useState, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import BookingPage from './Components/BookingPage';
import './App.css';

// Función para inicializar el estado de availableTimes
const initializeTimes = () => [
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00'
];

// Función reductora para manejar el estado de availableTimes
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // Aquí puedes agregar lógica para actualizar las horas disponibles en función de la fecha
      return initializeTimes();
    default:
      return state;
  }
};

function Main() {
  // Usar useReducer para manejar el estado de availableTimes
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);

  // Función para actualizar las horas disponibles
  const updateTimes = (date) => {
    dispatch({ type: 'UPDATE_TIMES', payload: date });
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} updateTimes={updateTimes} />} />
      </Routes>
    </main>
  );
}

export default Main;