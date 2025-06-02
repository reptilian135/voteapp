const { calculateElo } = require('./elo');

// Sample parks
const parks = [
  { id: 1, name: "Yellowstone", elo: 1500, image: "yellowstone.jpg" },
  { id: 2, name: "Yosemite", elo: 1500, image: "yosemite.jpg" },
  { id: 3, name: "Grand Canyon", elo: 1500, image: "grandcanyon.jpg" },
  { id: 4, name: "Zion", elo: 1500, image: "zion.jpg" },
  // Add more as needed
];

const votes = [];

function getRandomMatchup() {
  let i = Math.floor(Math.random() * parks.length);
  let j;
  do {
    j = Math.floor(Math.random() * parks.length);
  } while (j === i);
  return { parkA: parks[i], parkB: parks[j] };
}

function updateElo(winnerId, loserId) {
  const winner = parks.find(p => p.id === winnerId);
  const loser = parks.find(p => p.id === loserId);
  const { winnerElo, loserElo } = calculateElo(winner.elo, loser.elo);
  winner.elo = winnerElo;
  loser.elo = loserElo;
}

function getLeaderboard() {
  return [...parks].sort((a, b) => b.elo - a.elo);
}

function getRecentVotes() {
  return votes.slice(-10).reverse().map(vote => ({
    ...vote,
    winner: parks.find(p => p.id === vote.winnerId).name,
    loser: parks.find(p => p.id === vote.loserId).name
  }));
}

module.exports = { parks, votes, getRandomMatchup, updateElo, getLeaderboard, getRecentVotes };