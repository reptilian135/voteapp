import React from "react";
import "./Matchup.css";

export default function Matchup({ parkA, parkB, onVote }) {
  return (
    <div className="matchup">
      <h2>Which park do you prefer?</h2>
      <div className="parks">
        <div className="park" onClick={() => onVote(parkA.id, parkB.id)}>
          <img src={`/${parkA.image}`} alt={parkA.name} />
          <div className="park-name">{parkA.name}</div>
        </div>
        <div className="vs">VS</div>
        <div className="park" onClick={() => onVote(parkB.id, parkA.id)}>
          <img src={`/${parkB.image}`} alt={parkB.name} />
          <div className="park-name">{parkB.name}</div>
        </div>
      </div>
    </div>
  );
}