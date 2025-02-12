import { getCarName, retryUntilValid } from "./view/input.js";
import { validateCarNames } from "./utils/validation.js";

async function run() {
  const carNames = await retryUntilValid(getCarName, validateCarNames);
  console.log(carNames);
}

run();
