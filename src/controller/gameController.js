import findWinners from "../domain/findWinners.js";
import playGame from "../domain/playGame.js";
import {
  printResultHeader,
  printRoundScore,
  printWinners
} from "../view/output.js";

const gameController = (carNames, rounds) => {
  printResultHeader();

  const gameHistory = playGame(carNames, rounds);
  gameHistory.forEach(printRoundScore);

  const finalState = gameHistory.at(-1);
  const winners = findWinners(finalState);

  printWinners(winners);
};

export default gameController;
