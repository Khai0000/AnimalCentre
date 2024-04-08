import React from "react";
import "../styles/Home.css";
import organizationPhoto from "../assets/images/marine_organization.jpg";

const Home = () => {
  return (
    <div>
      <div
        className="p-5 text-center bg-body-tertiary homeBackground"
        style={{ backgroundColor: "red" }}
      >
        <div className="overlay"></div>
        <div className="container py-5">
          <h1 className="text-body-emphasis title">
            Protecting The Marine Animals
          </h1>
          <p className="col-lg-8 mx-auto lead content">
            Welcome to our platform dedicated for raising awareness about the
            impact of plastic pollution on marine animals. Our oceans, home to a
            diverse array of species, are facing a crisis due to plastic
            pollution. Join us in taking action to protect marine life and
            preserve our precious marine ecosystems.
          </p>
        </div>
      </div>
      <div className="aboutUsContainer p-5 d-flex">
        <img
          src={organizationPhoto}
          alt="organization"
          className="organizationPhoto"
        />
        <div className="container aboutUsContentContainer py-5  d-flex">
          <h2 className="aboutUsTitle">About Our Organization</h2>
          <p className="col-lg-12 lead aboutUsContent">
            Our organization, AnimalCentre, is dedicated to the preservation and
            protection of marine life. We have been actively involved in various
            initiatives aimed at combating plastic pollution and preserving
            marine ecosystems. Through research, education, and community
            outreach programs, we strive to raise awareness about the importance
            of marine conservation and inspire individuals to take action.
            Together, we can make a difference and ensure a sustainable future
            for our oceans and marine wildlife.
          </p>
        </div>
      </div>
      <div className="plasticPollutionContainer p-5 d-flex">
        <div className="container plasticPollutionContentContainer py-5  d-flex">
          <h2 className="plasticPollutionTitle">Why It is Important</h2>
          <p className="col-lg-12 lead plasticPollutionContent">
            Plastic pollution poses a significant danger to marine animals and
            the health of our oceans.
            <br />
            <strong>1. Impact on Marine Life:</strong> Plastic pollution harms
            marine animals to injuries, suffocation, and death.
            <br />
            <strong>2. Disruption of Ecosystems:</strong> Ecosystem Disruption:
            Plastic pollution harms marine habitats like coral reefs, seagrass
            beds, and mangrove forests, endangering marine life and releasing
            harmful chemicals into the environment.
            <br />
            <strong>3. Human Health Risks:</strong> Plastic pollution in the
            ocean threatens human health. Consuming contaminated seafood and
            exposure to microplastics in water and air can lead to unknowing
            ingestion of harmful chemicals, potentially causing health issues.
            <br />
          </p>
        </div>
        <img
          src={organizationPhoto}
          alt="organization"
          className="plasticPollutionPhoto"
        />
      </div>
    </div>
  );
};

export default Home;
