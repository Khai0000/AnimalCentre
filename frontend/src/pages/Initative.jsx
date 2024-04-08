import React from "react";
import "../styles/Initiative.css";
import IssueCard from "../components/IssueCard";

const issues = [
  {
    name: "Entanglement of Marine Life",
    description: "Discarded fishing nets, lines, and other debris pose a serious threat to marine life by entangling animals such as turtles, seals, dolphins, and seabirds, leading to injury, suffocation, and death.",
    image: "path_to_entanglement_image.jpg"
  },
  {
    name: "Ingestion of Plastic by Marine Animals",
    description: "Marine animals often mistake plastic debris for food, leading to ingestion. This can cause internal injuries, digestive blockages, and death. Species ranging from small fish to whales are affected by this issue.",
    image: "path_to_ingestion_image.jpg"
  },
  {
    name: "Microplastics in Marine Ecosystems",
    description: "Microplastics, tiny plastic particles less than 5mm in size, are pervasive in marine environments. They can be ingested by marine organisms and enter the food chain, posing risks to ecosystem health and human health.",
    image: "path_to_microplastics_image.jpg"
  },
  {
    name: "Plastic Pollution on Coral Reefs",
    description: "Plastic debris can smother and damage coral reefs, disrupting their growth and functioning. Coral reefs are vital ecosystems that support a diverse range of marine life, and plastic pollution threatens their survival.",
    image: "path_to_coral_reefs_image.jpg"
  },
  {
    name: "Plastic Pollution in Ocean Environments",
    description: "Plastic waste has been found even in the deepest parts of the ocean, contaminating remote and pristine environments. This pollution harms deep-sea organisms, many of which are still poorly understood.",
    image: "path_to_deep_ocean_image.jpg"
  }
];


const Initiative = () => {
  return (
    <div>
      <div className="p-3">
        <h2 className="text-center currentIssueTitle">Current Issues</h2>
        <div className="currentIssuesContainer p-5">
          {issues.map((issue)=>{
            return <IssueCard issue={issue}/>
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
