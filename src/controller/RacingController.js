import { readCarNames, readAttempt } from "../view/InputView.js";
import { concatElements, splitCarNames } from "../utils/StringParser.js";
import { validateCarNameArray, validateAttempt, validateCarName } from "../domain/Validator.js";
import { printChampions, printAttemptTitle, printError } from "../view/OutputView.js";
import RacingCarGame from "../domain/RacingCarGame.js";
import Car from "../domain/Car.js";

class RacingController {
  async run() {
    const carArray = await this.#initCars();
    const attempt = await this.#initAttempt();
    const racingCarGame = new RacingCarGame(carArray, attempt);

    printAttemptTitle();
    const winners = racingCarGame.play();
    this.#outputChampion(winners);
  }

  #initCars() {
    while (true) {
      try {
        return this.#createCars();
      } catch (error) {
        printError(error);
      }
    }
  }

  async #createCars() {
    const carNames = await this.#setCarNames();
    return this.#setCars(carNames);
  }

  async #setCarNames() {
    const input = await readCarNames();
    const carNames = splitCarNames(input);
    validateCarNameArray(carNames);

    return carNames;
  }

  #setCars(carNames) {
    const carArray = [];
    carNames.forEach((carName) => {
      validateCarName(carName);
      carArray.push(new Car(carName));
    });

    return carArray;
  }

  #initAttempt() {
    while (true) {
      try {
        return this.#setAttempt();
      } catch (error) {
        printError(error);
      }
    }
  }

  async #setAttempt() {
    const attempt = await readAttempt();
    validateAttempt(attempt);

    return attempt;
  }

  #outputChampion(champions) {
    printChampions(concatElements(champions));
  }
}

export default RacingController;
