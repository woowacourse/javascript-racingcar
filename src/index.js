import { retryUntilValid, getCarName, getAttemptCount } from "./view/input.js";
import { validateCarNames, validateAttemptCount } from "./utils/validation.js";

async function run() {
  const carNames = await retryUntilValid(getCarName, validateCarNames);
  const attemptCount = await retryUntilValid(
    getAttemptCount,
    validateAttemptCount
  );
}

run();
