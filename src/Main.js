import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import BookingPage from './Components/BookingPage';

// Función para inicializar el estado de availableTimes
const initializeTimes = () => [
  '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
];

// Reducer para actualizar availableTimes en función de la fecha seleccionada
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initializeTimes(); // Por ahora, mantiene las mismas horas sin importar la fecha
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