import { retryUntilValid } from "./utils/input.js";
import { getCarName, getAttemptCount } from "./view/input.js";
import { validateCarNames, validateAttemptCount } from "./utils/validation.js";
import {
  printWinner,
  printExecutionText,
  printRaceResult,
} from "./view/output.js";
import { startRace } from "./race.js";
import { racingCarController } from "./controller.js";

async function run() {
  const carNames = await retryUntilValid(getCarName, validateCarNames);
  const attemptCount = await retryUntilValid(
    getAttemptCount,
    validateAttemptCount
  );

  const { advanceRacingCar, getRacingCarResultEntries, getWinners } =
    racingCarController(carNames);

  printExecutionText();
  const raceResult = startRace(
    attemptCount,
    carNames,
    advanceRacingCar,
    getRacingCarResultEntries
  );
  printRaceResult(raceResult);

  const winners = getWinners();
  printWinner(winners);
}

run();
