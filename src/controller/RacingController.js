import { readCarNames, readAttempt } from "../view/InputView.js";
import { concatElements, splitCarNames } from "../utils/StringParser.js";
import { validateCarNameArray, validateAttempt } from "../domain/Validator.js";
import { printChampions, printCar, printNewLine, printAttemptTitle } from "../view/OutputView.js";

class RacingController {
  async setCarName() {
    const input = await readCarNames();
    const carNames = splitCarNames(input);
    validateCarNameArray(carNames);

    return carNames;
  }

  async setAttempt() {
    const inputAttempt = await readAttempt();
    validateAttempt(inputAttempt);

    return inputAttempt;
  }

  async outputChampion(champions) {
    printChampions(concatElements(champions));
  }

  outputCars(cars, index) {
    if (index == 0) {
      printAttemptTitle();
      printNewLine();
    }
    cars.forEach((car) => {
      printCar(car);
    });
    printNewLine();
  }
}

export default RacingController;
