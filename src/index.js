import gameController from "./controller/gameController.js";
import { getCarNames, getMoveCount } from "./view/input.js";

async function run() {
  const carNames = await getCarNames();
  const moveCount = await getMoveCount();

  gameController(carNames, moveCount);
}

run();
