import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('El campo de nombre tiene el atributo required', () => {
  // Valores iniciales para los estados
  const initialValues = {
    name: "",
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  };

  // Renderiza el componente con los valores iniciales
  render(
    <BookingForm
      name={initialValues.name}
      setName={() => {}}
      date={initialValues.date}
      setDate={() => {}}
      time={initialValues.time}
      setTime={() => {}}
      guests={initialValues.guests}
      setGuests={() => {}}
      occasion={initialValues.occasion}
      setOccasion={() => {}}
      availableTimes={[]}
      dispatch={() => {}}
      handleSubmit={() => {}}
    />
  );

  // Verifica que el campo de nombre tenga el atributo required
  const nameInput = screen.getByLabelText(/name/i);
  expect(nameInput).toBeRequired();
});