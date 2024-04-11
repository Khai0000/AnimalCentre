import "../styles/Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useState } from "react";
import axios from "axios";

function Footer() {
  const [message, setMessage] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingButtonClick = (rating) => {
    if (selectedRating === rating) setSelectedRating(null);
    else setSelectedRating(rating);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!message) {
      alert("Please give a feedback message");
      return;
    }

    if (!selectedRating) {
      alert("Please select a rating");
      return;
    }

    const formData = {
      message: message,
      'rating': selectedRating,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/server.php/feedbacks",
        formData
      );
      if (response.status === 200) {
        const message = response.data.message;
        alert(message);
        setMessage("");
        setSelectedRating(null);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again later.");
    }
  };

  return (
    <footer>
      <div className="iconContainer">
        <span className="iconCaption">Follow us:</span>
        <InstagramIcon />
        <FacebookIcon />
        <YouTubeIcon />
      </div>

      <form className="ratingContainer" onSubmit={handleOnSubmit}>
        <h3>Hey Drop Some Rating to Our Page!</h3>
        <div className="border">
          <textarea
            className="textArea"
            placeholder="Leave your text here!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <div className="buttonContainer">
            <div className="ratingButtonContainer">
              {[1, 2, 3, 4, 5].map((rating) => (
                <button
                  key={rating}
                  className={`ratingButton ${
                    selectedRating === rating ? "selected" : ""
                  }`}
                  type="button"
                  onClick={() => handleRatingButtonClick(rating)}
                >
                  {rating}
                </button>
              ))}
            </div>
            <button className="submitButton" type="submit">
              SUBMIT
            </button>
          </div>
        </div>
      </form>

      <p>
        <i>AnimalCentre @Copyright</i>2024. All rights reserved. Powered by Gin
        Khai.{" "}
      </p>
    </footer>
  );
}

export default Footer;
