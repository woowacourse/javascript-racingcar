import { getCarNames, getMoveCount } from "./view/input.js";
import playGame from './domain/playGame.js'

async function run () {
  const carNames = await getCarNames();
  const moveCount = await getMoveCount();

  playGame(carNames, moveCount);

}

run();