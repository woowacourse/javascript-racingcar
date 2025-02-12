import { retryUntilValid, getCarName, getAttemptCount } from "./view/input.js";
import { validateCarNames, validateAttemptCount } from "./utils/validation.js";
import { getWinners, initRacingCar } from "./raceState.js";
import {
  printWinner,
  printExecutionText,
  printRaceResult,
} from "./view/output.js";
import { startRace } from "./raceController.js";

async function run() {
  const carNames = await retryUntilValid(getCarName, validateCarNames);
  const attemptCount = await retryUntilValid(
    getAttemptCount,
    validateAttemptCount
  );

  const racingCar = initRacingCar(carNames);

  printExecutionText();
  const raceResult = startRace(attemptCount, racingCar);
  printRaceResult(raceResult);

  const winners = getWinners(racingCar);
  printWinner(winners);
}

run();
