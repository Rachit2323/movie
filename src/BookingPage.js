import React, { useState } from 'react';

const BookingPage = ({ showName }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Store user details in session storage
    const userDetails = {
      name: name,
      email: email,
      age: age,
    };
    sessionStorage.setItem('userDetails', JSON.stringify(userDetails));

    // Perform form submission logic
    // ...

    // Clear form fields
    setName('');
    setEmail('');
    setAge('');
  };

  return (
    <div>
      <h1>Booking Page</h1>
      <h2>Movie: {showName}</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookingPage;
