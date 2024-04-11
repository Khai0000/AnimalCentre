import React, { useState } from "react";
import { useParams } from "react-router-dom";
import eventsData from "../data/eventsData";
import "../styles/EventDetailPage.css";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const EventDetailPage = () => {
  const { id } = useParams();
  const event = eventsData.find((event) => event.id === id);

  const [showPopup, setShowPopup] = useState(false);
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!name || !contactNumber || !email) {
      alert("Please fill in all fields");
      return;
    }

    const formData = {
      "name": name,
      "contactNumber": contactNumber,
      "email": email,
    };


    try {
      const response = await axios.post(
        "http://localhost:8000/server.php/register_events",
        formData,
      );

      
      if (response.status === 200) {
        const message = response.data.message;
        alert(message);
        setName("");
        setContactNumber("");
        setEmail("");
        setShowPopup(false);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again later.");
    }
  };

  return !showPopup ? (
    <div className="eventDetailPage">
      <h2 className="eventTitle">{event.name}</h2>
      <p className="eventDate">Date: {event.date}</p>
      <p className="eventLocation">Venue: {event.location}</p>
      <p className="eventDescription">{event.description}</p>
      <button className="registerButton" onClick={() => setShowPopup(true)}>
        Register now
      </button>
    </div>
  ) : (
    <div>
      <form className="container formContainer" onSubmit={handleOnSubmit}>
        <h2 className="eventTitle">{event.name} Registration Form</h2>
        <input
          className="nameInput"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="contactInput"
          type="tel"
          placeholder="Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />
        <input
          className="emailInput"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="submitButton" type="submit">
          Submit
        </button>
        <button
          className="closeButton"
          onClick={() => setShowPopup(false)}
          type="button"
        >
          <CloseIcon color="warning" fontSize="large" />
        </button>
      </form>
    </div>
  );
};

export default EventDetailPage;
