import { retryUntilValid, getCarName, getAttemptCount } from "./view/input.js";
import { validateCarNames, validateAttemptCount } from "./utils/validation.js";
import { racingCarController } from "./utils/controller.js";
import {
  printWinner,
  printExecutionText,
  printRaceResult,
} from "./view/output.js";

async function run() {
  const carNames = await retryUntilValid(getCarName, validateCarNames);
  const attemptCount = await retryUntilValid(
    getAttemptCount,
    validateAttemptCount
  );

  const { startRace, getWinner } = racingCarController(carNames);

  printExecutionText();
  const raceResult = startRace(attemptCount);
  printRaceResult(raceResult);

  printWinner(getWinner);
}

run();
