import InputView from "../view/InputView.js";
import Car from "./Car.js";
import StringParser from "../utils/StringParser.js";
import SETTING from "../constants/Setting.js";
import OutputView from "../view/OutputView.js";
import { AttemptRangeError, AttemptTypeError } from "../error/CustomError.js";

class RacingCarGame {
  #carArray;
  #attempt;

  constructor() {
    this.#carArray = [];
    this.#setGame();
  }

  async #setGame() {
    await this.#setCarName();
    await this.#setAttempt();
  }

  async #setCarName() {
    const input = await InputView.readCarNames();
    const carNames = StringParser.splitCarNames(input);

    carNames.forEach((carName) => {
      const newCar = new Car(carName);
      this.#carArray.push(newCar);
    });
  }

  async #setAttempt() {
    while (true) {
      try {
        const inputAttempt = await InputView.readAttempt();
        this.#validateAttempt(inputAttempt);
        this.#attempt = inputAttempt;

        break;
      } catch (error) {
        OutputView.printError(error);
        continue;
      }
    }
  }

  #validateAttempt(input) {
    const attempt = input.trim();

    if (isNaN(attempt) || attempt === "") {
      throw new AttemptTypeError();
    }
    if (
      Number(attempt) < SETTING.minAttempt ||
      Number(attempt) > SETTING.maxAttempt
    ) {
      throw new AttemptRangeError();
    }
  }
}

export default RacingCarGame;
