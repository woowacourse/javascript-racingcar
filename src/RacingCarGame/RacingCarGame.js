import InputView from "../view/InputView.js";
import Car from "./Car.js";
import StringParser from "../utils/StringParser.js";
import SETTING from "../constants/Setting.js";
import OutputView from "../view/OutputView.js";
import REGEXP from "../constants/RegExp.js";
import {
  AttemptRangeError,
  AttemptTypeError,
  CarNameDuplicatedError,
  CarNameLengthError,
  CarNameRangeError,
  CarNameTypeError,
} from "../error/CustomError.js";

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
    while (true) {
      try {
        const input = await InputView.readCarNames();

        const carNames = StringParser.splitCarNames(input);
        this.#validateCarNameArray(carNames);
        this.#createCars(carNames);

        break;
      } catch (error) {
        OutputView.printError(error);
      }
    }
  }

  #createCars(carNames) {
    carNames.forEach((carName) => {
      this.#validateCarName(carName);

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
      }
    }
  }

  #validateCarName(input) {
    if (
      input.length < SETTING.minCarNameLength ||
      input.length > SETTING.maxCarNameLength
    ) {
      throw new CarNameLengthError();
    }
    if (!REGEXP.carName.test(input)) {
      throw new CarNameTypeError();
    }
  }

  #validateCarNameArray(inputArray) {
    if (
      inputArray.length < SETTING.minCarCount ||
      inputArray.length > SETTING.maxCarCount
    ) {
      throw new CarNameRangeError();
    }
    if (inputArray.length !== new Set(inputArray).size) {
      throw new CarNameDuplicatedError();
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
