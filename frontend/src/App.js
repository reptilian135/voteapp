import React, { useEffect, useState } from "react";
import Matchup from "./Matchup";
import Leaderboard from "./Leaderboard";
import RecentVotes from "./RecentVotes";
import "./App.css";

function App() {
  const [matchup, setMatchup] = useState(null);

  const fetchMatchup = async () => {
    const res = await fetch("http://localhost:4000/api/matchup");
    setMatchup(await res.json());
  };

  useEffect(() => {
    fetchMatchup();
  }, []);

  const handleVote = async (winnerId, loserId) => {
    await fetch("http://localhost:4000/api/vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ winnerId, loserId }),
    });
    fetchMatchup();
  };

  return (
    <div className="App">
      <h1>National Park Showdown</h1>
      <div className="main-content">
        {matchup && (
          <Matchup
            parkA={matchup.parkA}
            parkB={matchup.parkB}
            onVote={handleVote}
          />
        )}
        <Leaderboard />
        <RecentVotes />
      </div>
    </div>
  );
}

export default App;