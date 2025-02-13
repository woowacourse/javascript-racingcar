import { getCarNames, getMoveCount } from "./view/input.js";
import playGame from "./domain/playGame.js";
import { displayWinner } from "./domain/findWinners.js";

async function run() {
  const carNames = await getCarNames();
  const moveCount = await getMoveCount();

  const cars = playGame(carNames, moveCount);
  displayWinner(cars);
}

run();
