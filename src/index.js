import { getCarNames, getMoveCount } from "./view/input.js";

async function run  () {
  const carNames = await getCarNames();
  const moveCount = await getMoveCount();

  console.log(carNames, moveCount);
}

run();