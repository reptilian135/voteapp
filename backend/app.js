const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { parks, votes, getRandomMatchup, updateElo, getLeaderboard, getRecentVotes } = require('./store');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Get a random matchup
app.get('/api/matchup', (req, res) => {
  const matchup = getRandomMatchup();
  res.json(matchup);
});

// Submit a vote
app.post('/api/vote', (req, res) => {
  const { winnerId, loserId } = req.body;
  updateElo(winnerId, loserId);
  votes.push({
    winnerId,
    loserId,
    timestamp: Date.now()
  });
  res.json({ success: true });
});

// Get leaderboard
app.get('/api/leaderboard', (req, res) => {
  res.json(getLeaderboard());
});

// Get recent votes
app.get('/api/recent-votes', (req, res) => {
  res.json(getRecentVotes());
});

app.get('/api/parks', (req, res) => {
  res.json(parks);
});

app.listen(4000, () => {
  console.log('Backend running on http://localhost:4000');
});