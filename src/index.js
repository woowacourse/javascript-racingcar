import { getCarNames, getMoveCount } from "./view/input.js";
import playGame from "./domain/playGame.js";
import findWinners from "./domain/findWinners.js";
import { displayWinner } from "./view/output.js";

async function run() {
  const carNames = await getCarNames();
  const moveCount = await getMoveCount();

  const finalResult = playGame(carNames, moveCount);
  const winnersName = findWinners(finalResult);
  displayWinner(winnersName);
}

run();
