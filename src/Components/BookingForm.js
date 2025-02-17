import './Booking.css'

function BookingForm({
   name, setName,
   date, setDate,
   time, setTime,
   guests, setGuests,
   occasion, setOccasion, 
   availableTimes,
   dispatch, 
   handleSubmit
 }) {
   
   const handleDateChange = (e) => {
      const selectedDate = e.target.value;
      setDate(selectedDate);
      dispatch({ type: 'UPDATE_TIMES', payload: selectedDate }); // Actualiza los horarios cuando cambie la fecha
    };

  // Función para validar el formulario
  const isFormValid = () => {
    return (
       name.trim() !== '' &&
       date.trim() !== '' &&
       time.trim() !== '' &&
       guests > 0
    );
 };
 
   return (
     <form onSubmit={handleSubmit} className="booking-form" aria-labelledby="form-heading">
       <h2 id="form-heading">Book A Table</h2>

       <label htmlFor="name">Name:</label>
       <input type="text" id="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} aria-required="true" aria-describedby={name.trim() === "" ? "name-error" : undefined} />
       {name.trim() === "" && <p className="error-message">Please enter your name.</p>}
 
       <label htmlFor="res-date">Choose date:</label>
       <input type="date" id="res-date" value={date} onChange={handleDateChange} aria-required="true" aria-describedby={date === "" ? "date-error" : undefined} />
       {date === "" && <p className="error-message">Please select a date.</p>}

 
       <label htmlFor="res-time">Choose time:</label>
       <select id="res-time" value={time} onChange={e => setTime(e.target.value)} aria-required="true" aria-describedby={time === "" ? "time-error" : undefined}>
         {availableTimes.map(timeOption => (
           <option key={timeOption} value={timeOption}>{timeOption}</option>
         ))}
       </select>
       {time === "" && <p className="error-message" aria-live="polite">Please select a time.</p>}
 
       <label htmlFor="guests">Number of guests:</label>
       <input type="number" id="guests" placeholder="1" min="1" max="10" value={guests} onChange={e => setGuests(e.target.value)} aria-required="true" aria-describedby={(guests < 1 || guests > 10) ? "guests-error" : undefined} />
       {(guests < 1 || guests > 10) && <p id="guests-error" className="error-message" aria-live="polite">Number of guests must be between 1 and 10.</p>}
 
       <label htmlFor="occasion">Occasion:</label>
       <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} aria-required="true">
         <option value="Birthday">Birthday</option>
         <option value="Anniversary">Anniversary</option>
       </select>
 
       <button type="submit" disabled={!isFormValid()} aria-disabled={!isFormValid()} aria-label='OnClick' tabIndex="0">Book</button>
     </form>
   );
 }

 export default BookingForm;