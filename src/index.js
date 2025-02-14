import { INPUT, OUTPUT } from "./constants/messages.js";
import { createCars } from "./domain/car.js";
import { getWinnersByPosition, playRacing } from "./domain/play.js";
import { retryInput } from "./utils/retryInput.js";
import { splitByDelimiter } from "./utils/split.js";
import { validateCarNames, validateCount } from "./utils/validation.js";
import { readLineAsync } from "./view/input.js";
import { print, printProcess, printWinners } from "./view/output.js";

async function run() {
  let carNames, tryNumber;

  await retryInput(async () => {
    const stringOfCarNames = await readLineAsync(INPUT.CAR_NAMES);
    carNames = splitByDelimiter(stringOfCarNames, ",");
    validateCarNames(carNames);
  });

  await retryInput(async () => {
    tryNumber = await readLineAsync(INPUT.TRY_COUNT);
    validateCount(tryNumber);
  });

  const cars = createCars(carNames);

  print(OUTPUT.RESULT);
  const playResult = playRacing(cars, tryNumber);
  playResult.forEach(printProcess);

  const winners = getWinnersByPosition(playResult);
  printWinners(winners);
}

run();
