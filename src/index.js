import { retryUntilValid, getCarName, getAttemptCount } from "./view/input.js";
import { validateCarNames, validateAttemptCount } from "./utils/validation.js";
import { racingCarController } from "./utils/controller.js";
import { printWinner } from "./view/output.js";

async function run() {
  const carNames = await retryUntilValid(getCarName, validateCarNames);
  const attemptCount = await retryUntilValid(
    getAttemptCount,
    validateAttemptCount
  );

  const { startRace, getWinner } = racingCarController(carNames);

  startRace(attemptCount);
  printWinner(getWinner);
}

run();
