// src/Components/BookingForm.test.js
import { initializeTimes, updateTimes } from './BookingForm';
import { fetchAPI } from './api';

// Mock the API
jest.mock('./api', () => ({
  fetchAPI: jest.fn(() => Promise.resolve(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]))
}));

test("initializeTimes returns the correct available times", async () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const times = await initializeTimes();
  expect(times).toEqual(expectedTimes);
});

test("updateTimes updates the times when receiving new times from API", () => {
  const initialState = ["17:00", "18:00"];
  const newTimes = ["19:00", "20:00"];
  const action = { type: 'UPDATE_TIMES', payload: newTimes };
  
  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(newTimes);
});
