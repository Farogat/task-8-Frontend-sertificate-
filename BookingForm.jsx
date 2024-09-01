// BookingForm.jsx
import React, { useState } from 'react';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date || !time) {
      setError('All fields are required.');
      return;
    }
    setError('');
    // Submit the booking
    console.log({ name, date, time, guests });
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby="booking">
      <h2 id="booking">Book a Table</h2>
      {error && <p role="alert">{error}</p>}
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <input
        type="number"
        min="1"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />
      <button type="submit">Reserve</button>
    </form>
  );
};

export default BookingForm;