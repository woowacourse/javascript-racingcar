import { INPUT } from "./constants/messages.js";
import { createCars } from "./domain/car.js";
import { getWinnersByPosition, playRacing } from "./domain/play.js";
import { validateCarNames, validateCount } from "./utils/validation.js";
import handleUserInput from "./view/handleUserInput.js";
import { printProcess, printWinners } from "./view/output.js";

async function run() {
  const stringOfCarNames = await handleUserInput(
    INPUT.CAR_NAMES,
    validateCarNames
  );
  const carNames = stringOfCarNames.split(",");

  const tryNumber = Number(
    await handleUserInput(INPUT.TRY_COUNT, validateCount)
  );

  const cars = createCars(carNames);

  const playResult = playRacing(cars, tryNumber);
  playResult.forEach(printProcess);

  const winners = getWinnersByPosition(playResult);
  printWinners(winners);
}

run();
