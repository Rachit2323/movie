import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import './ShowList.css'; // Import custom CSS file

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetchShows();
  }, []);

  const fetchShows = async () => {
    try {
      const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
      const data = await response.json();
      setShows(data);
    } catch (error) {
      console.error('Error fetching shows:', error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="show-list-container">
        <h1 className="text-center my-4">TV Shows</h1>
        <div className="row">
          {shows.map(show => (
            <div className="col-md-4 mb-4" key={show.show.id}>
              <Card className="h-100">
                <div className="image-container">
                  <div className="image-background"></div>
                  <Card.Img variant="top" src={show.show.image?.medium} />
                </div>
                <Card.Body>
                  <Card.Title className="show-title">{show.show.name}</Card.Title>
                  <Card.Text>
                    <span className="genre-label">Genres:</span> {show.show.genres.join(', ')}
                    <br />
                    <span className="premiered-label">Premiered:</span> {show.show.premiered}
                  </Card.Text>
                  <Link to={`/summary/${show.show.id}`}>
                    <Button variant="primary">Show Summary</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowList;
