import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import BookingPage from './BookingPage';

import './ShowSummary.css'; // Import custom CSS file

const ShowSummary = () => {
  const { id } = useParams();
  const [summary, setSummary] = useState('');
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [showName, setShowName] = useState('');

  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    try {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setSummary(stripHtmlTags(data.summary));
      setShowName(data.name);
    } catch (error) {
      console.error('Error fetching show summary:', error);
    }
  };

  const stripHtmlTags = (html) => {
    const regex = /(<([^>]+)>)/gi;
    return html.replace(regex, '');
  };

  const handleBooking = () => {
    setShowBookingForm(true);
  };

  return (
    <div className="show-summary-container">
      <h1 className="show-summary-heading">Show Summary</h1>
      <p className="show-summary-text">{summary}</p>
      <Button variant="primary" onClick={handleBooking}>
        Book Ticket
      </Button>

      {showBookingForm && <BookingPage showName={showName} />}
    </div>
  );
};

export default ShowSummary;
