import { initializeTimes, updateTimes } from './BookingForm';

// Your existing test
test("initializeTimes returns the correct default available times", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const times = initializeTimes();
  expect(times).toEqual(expectedTimes);
});

// New test for updateTimes
test("updateTimes returns the same value provided in the state", () => {
  const state = ["17:00", "18:00", "19:00"];
  const action = { type: 'UPDATE_TIMES', payload: new Date() };
  
  const newState = updateTimes(state, action);
  
  expect(newState).toEqual(state);
});