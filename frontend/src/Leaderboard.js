import React, { useEffect, useState } from "react";
import "./Leaderboard.css";

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/leaderboard")
      .then(res => res.json())
      .then(setLeaderboard);
  }, []);
  return (
    <div className="leaderboard">
      <h2>Rankings</h2>
      <ol>
        {leaderboard.map(park => (
          <li key={park.id}>
            <span className="name">{park.name}</span>
            <span className="elo">{park.elo}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}