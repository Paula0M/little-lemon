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

   return (
     <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
       <label htmlFor="name">Name:</label>
       <input type="text" id="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
 
       <label htmlFor="res-date">Choose date:</label>
       <input type="date" id="res-date" value={date} onChange={e => setDate(e.target.value)} required />
 
       <label htmlFor="res-time">Choose time:</label>
       <select id="res-time" value={time} onChange={e => setTime(e.target.value)} required>
         {availableTimes.map(timeOption => (
           <option key={timeOption} value={timeOption}>{timeOption}</option>
         ))}
       </select>
 
       <label htmlFor="guests">Number of guests:</label>
       <input type="number" id="guests" placeholder="1" min="1" max="10" value={guests} onChange={e => setGuests(e.target.value)} required />
 
       <label htmlFor="occasion">Occasion:</label>
       <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} required>
         <option value="Birthday">Birthday</option>
         <option value="Anniversary">Anniversary</option>
       </select>
 
       <button type="submit">Make Your Reservation</button>
     </form>
   );
 }

 export default BookingForm;