function calculateElo(winnerElo, loserElo, k = 32) {
  const expectedWin = 1 / (1 + Math.pow(10, (loserElo - winnerElo) / 400));
  const change = Math.round(k * (1 - expectedWin));
  return {
    winnerElo: winnerElo + change,
    loserElo: loserElo - change
  };
}
module.exports = { calculateElo };