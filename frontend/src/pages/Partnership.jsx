import React, { useState } from "react";
import "../styles/Partnership.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import DomainIcon from "@mui/icons-material/Domain";
import oceanCleanup from "../assets/images/ocean_cleanup.jpg";
import coralreefAlliance from "../assets/images/coralreef_alliance.webp";
import oceanConservancy from "../assets/images/ocean_conservancy.svg";

const Partnership = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!name || !contactNumber || !email || !message) {
        alert("Please fill in all fields");
        return;
    }

    const formDataMessage = `Form submitted:\nName: ${name}\nContact Number: ${contactNumber}\nEmail: ${email}\nMessage: ${message}`;
    alert(
        `${formDataMessage}\n\nThank you for submitting the form! We will contact you soon!`
    );
    setName("");
    setContactNumber("");
    setEmail("");
    setMessage("");
};


  return (
    <div className="partnershipPage container p-3">
      <h2 className="pageTitle">Connect With Us</h2>
      <div className="connectionContainer">
        <div className="contactContainer">
          <PhoneIcon className="phoneIcon" />
          <div>
            <h3 className="contactTitle">Contact Number</h3>
            <p>+6012-3456789</p>
          </div>
        </div>
        <div className="emailContainer">
          <EmailIcon className="emailIcon" />
          <div>
            <h3 className="emailTitle">Email</h3>
            <p>ginkhai88@gmail.com</p>
          </div>
        </div>
        <div className="addressContainer">
          <DomainIcon className="addressIcon" />
          <div>
            <h3 className="addressTitle">Address</h3>
            <p>
              Onespine, 38, Jalan Tun Mohd Fuad 1,Taman Tun Dr Ismail, TTDI,
              Kuala Lumpur, 60000, Malaysia
            </p>
          </div>
        </div>
      </div>
      <h2 className="pageTitle">Current Partnerships</h2>
      <div className="partnershipContainer">
        <div className="partnershipDetailsContainer">
          <img
            src={oceanCleanup}
            alt="partnership organization logo"
            className="partnerLogo"
          />
          <div>
            <h3 className="partnerName">The Ocean Cleanup</h3>
            <p className="partnerDescription">
              A nonprofit environmental engineering organization based in the
              Netherlands that develops technology to extract plastic pollution
              from the oceans and to capture it in rivers before it can reach
              the ocean. Their initial focus was on the Pacific Ocean and its
              garbage patch, and extended to rivers in countries including
              Indonesia, Guatemala, and the United States.
            </p>
          </div>
        </div>
        <div className="partnershipDetailsContainer">
          <img
            src={coralreefAlliance}
            alt="partnership organization logo"
            className="partnerLogo"
          />
          <div>
            <h3 className="partnerName">Coral Reef Alliance</h3>
            <p className="partnerDescription">
              An environmental non-profit, 501(c)(3) non-governmental
              organization based in Oakland, California that is dedicated to
              coral reef conservation. They work at local, regional, and global
              levels to keep coral reefs healthy, so they can adapt to climate
              change and survive for generations to come.
            </p>
          </div>
        </div>
        <div className="partnershipDetailsContainer">
          <img
            src={oceanConservancy}
            alt="partnership organization logo"
            className="partnerLogo"
          />
          <div>
            <h3 className="partnerName">Ocean Conservancy</h3>
            <p className="partnerDescription">
              A nonprofit environmental advocacy group based in Washington,
              D.C., United States. The organization seeks to promote healthy and
              diverse ocean ecosystems, prevent marine pollution, climate change
              and advocates against practices that threaten oceanic and human
              life.
            </p>
          </div>
        </div>
      </div>

      <h2 className="pageTitle">Collab With Us</h2>
      <form className="partnershipForm" onSubmit={handleOnSubmit}>
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
        <textarea
          className="message"
          rows={5}
          placeholder="Leave your message here!"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          required
        />
        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Partnership;
