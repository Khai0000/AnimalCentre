import React from "react";
import '../styles/IssueCard.css';

const IssueCard = ({issue}) => {
  return (
      <div className="issueCardContainer">
        <img src={issue.image} className="issuePicture" alt=""/>
        <h4>{issue.name}</h4>
        <p>
          {issue.description}
        </p>
      </div>
  );
};

export default IssueCard;
