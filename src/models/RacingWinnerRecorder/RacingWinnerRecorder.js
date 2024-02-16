const RacingWinnerRecorder = Object.freeze({
  createRacingWinners(finalRacingResults) {
    const maxMoveCount = calculateMaxMoveCount(finalRacingResults);
    const racingWinners = extractRacingWinnersByMaxMoveCount(finalRacingResults, maxMoveCount);

    return racingWinners;
  },
});

export default RacingWinnerRecorder;

function calculateMaxMoveCount(finalRacingResults) {
  const moveCounts = finalRacingResults.map(({ moveCount }) => moveCount);

  return Math.max(...moveCounts);
}

function extractRacingWinnersByMaxMoveCount(finalRacingResults, maxMoveCount) {
  return finalRacingResults.filter(({ moveCount }) => moveCount === maxMoveCount).map(({ carName }) => carName);
}
