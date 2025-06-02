import React, { useEffect, useState } from "react";
import "./RecentVotes.css";

export default function RecentVotes() {
  const [votes, setVotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/recent-votes")
      .then(res => res.json())
      .then(setVotes);
  }, []);
  return (
    <div className="recent-votes">
      <h2>Recent Votes</h2>
      <ul>
        {votes.map((vote, i) => (
          <li key={i}>
            {vote.winner} beat {vote.loser} ({new Date(vote.timestamp).toLocaleTimeString()})
          </li>
        ))}
      </ul>
    </div>
  );
}