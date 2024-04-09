import React from 'react';
import { Link } from 'react-router-dom'; 
import eventsData from '../data/eventsData';
import '../styles/EventPage.css';

const EventPage = () => {
  return (
    <div className="eventPage container p-3">
      <h2 className="pageTitle">Upcoming Events</h2>
      <div className="eventsGrid">
        {eventsData.map(event => (
          <div key={event.id} className="eventCard">
            <h3 className="eventTitle">{event.name}</h3>
            <p className="eventDate">{event.date}</p>
            <p className="eventLocation">{event.location}</p>
            <Link to={`/events/${event.id}`} className="eventLink">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
