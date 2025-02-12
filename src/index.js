import { retryUntilValid, getCarName, getAttemptCount } from "./view/input.js";
import { validateCarNames, validateAttemptCount } from "./utils/validation.js";
import { racingCarController } from "./utils/controller.js";

async function run() {
  const carNames = await retryUntilValid(getCarName, validateCarNames);
  const attemptCount = await retryUntilValid(
    getAttemptCount,
    validateAttemptCount
  );

  const { startRace } = racingCarController(carNames);

  startRace(attemptCount);
}

run();
