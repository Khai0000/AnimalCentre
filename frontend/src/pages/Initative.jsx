import React from "react";
import "../styles/Initiative.css";
import IssueCard from "../components/IssueCard";
import issues from '../data/issuesData'


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
