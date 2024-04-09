import React from "react";
import "../styles/Initiative.css";
import IssueCard from "../components/IssueCard";
import entanglementPicture from "../assets/images/entanglement.jpg";
import eatPlasticPicture from "../assets/images/animal_eat_plastic.webp";
import plasticInOceanPicture from "../assets/images/plastic_in_ocean.webp";
import deadCoralsPicture from "../assets/images/dead_corals.webp";
import seaBirdPicture from "../assets/images/seabird_plastic.webp";

const issues = [
  {
    name: "Entanglement of Marine Life",
    description:
      "Discarded fishing nets, lines, and other debris pose a serious threat to marine life by entangling animals such as turtles, seals, dolphins, and seabirds, leading to injury, suffocation, and death.",
    image: entanglementPicture,
  },
  {
    name: "Ingestion of Plastic by Marine Animals",
    description:
      "Marine animals often mistake plastic debris for food, leading to ingestion. This can cause internal injuries, digestive blockages, and death. Species ranging from small fish to whales are affected by this issue.",
    image: eatPlasticPicture,
  },
  {
    name: "Plastic Pollution Threat to Seabirds",
    description:
      "Seabirds are particularly vulnerable to the impacts of plastic pollution. They may ingest plastic debris or become entangled in it, leading to injury, reduced reproductive success, and population decline.",
    image: seaBirdPicture,
  },
  {
    name: "Plastic Pollution on Coral Reefs",
    description:
      "Plastic debris can smother and damage coral reefs, disrupting their growth and functioning. Coral reefs are vital ecosystems that support a diverse range of marine life, and plastic pollution threatens their survival.",
    image: deadCoralsPicture,
  },
  {
    name: "Plastic Pollution in Ocean Environments",
    description:
      "Plastic waste has been found even in the deepest parts of the ocean, contaminating remote and pristine environments. This pollution harms deep-sea organisms, many of which are still poorly understood.",
    image: plasticInOceanPicture,
  },
];

const Initiative = () => {
  return (
    <div>
      <div className="p-3">
        <h2 className="text-center currentIssueTitle">Current Issues</h2>
        <div className="currentIssuesContainer p-5">
          {issues.map((issue) => {
            return <IssueCard issue={issue} />;
          })}
        </div>
        <div className="takeActionContainer p-5">
          <h2 className="text-center mb-4 currentIssueTitle">Take Action</h2>
          <div className="container">
            <p className="lead text-center">
              You can make a difference! Here are some actions you can take to
              help protect marine life and oceans:
            </p>
            <ul>
              <li>Reduce your use of single-use plastics</li>
              <li>Participate in beach clean-up events</li>
              <li>Support organizations dedicated to marine conservation</li>
              <li>Advocate for policies that protect marine ecosystems</li>
              <li>
                Spread awareness about the importance of marine conservation
              </li>
            </ul>
            <p className="text-center">
              Ready to take action? Start making a positive impact today!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initiative;
