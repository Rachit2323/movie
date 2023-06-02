import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage.js';
import ShowList from './ShowList';
import ShowSummary from './ShowSummary';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/summary/:id" element={<ShowSummary />} />
        <Route path="/booking/:showName" element={<BookingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
