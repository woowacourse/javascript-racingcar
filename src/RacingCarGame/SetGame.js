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

class SetGame {
  #carArray;
  #attempt;

  constructor() {
    this.#carArray = [];
    // this.#setGame();
  }

  async init() {
    await this.#setCarName();
    await this.#setAttempt();
  }

  async #readCarName() {
    const input = await InputView.readCarNames();
    const carNames = StringParser.splitCarNames(input);
    this.#validateCarNameArray(carNames);
    this.#createCars(carNames);
  }

  async #setCarName() {
    while (true) {
      try {
        await this.#readCarName();
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

  async #readAttempt() {
    const inputAttempt = await InputView.readAttempt();
    this.#validateAttempt(inputAttempt);
    this.#attempt = inputAttempt;
  }

  async #setAttempt() {
    while (true) {
      try {
        await this.#readAttempt();
        break;
      } catch (error) {
        OutputView.printError(error);
      }
    }
  }

  #validateCarNameLength(input) {
    if (
      input.length < SETTING.minCarNameLength ||
      input.length > SETTING.maxCarNameLength
    ) {
      throw new CarNameLengthError();
    }
  }

  #validateCarNameType(input) {
    if (!REGEXP.carName.test(input)) {
      throw new CarNameTypeError();
    }
  }

  #validateCarName(input) {
    this.#validateCarNameLength(input);
    this.#validateCarNameType(input);
  }

  #validateCarNameRange(inputArray) {
    if (
      inputArray.length < SETTING.minCarCount ||
      inputArray.length > SETTING.maxCarCount
    ) {
      throw new CarNameRangeError();
    }
  }

  #validateCarNameDuplicated(inputArray) {
    if (inputArray.length !== new Set(inputArray).size) {
      throw new CarNameDuplicatedError();
    }
  }

  #validateCarNameArray(inputArray) {
    this.#validateCarNameRange(inputArray);
    this.#validateCarNameDuplicated(inputArray);
  }

  #validateAttemptType(attempt) {
    if (Number.isNaN(attempt) || attempt === "") {
      throw new AttemptTypeError();
    }
  }

  #validateAttemptRange(attempt) {
    if (
      Number(attempt) < SETTING.minAttempt ||
      Number(attempt) > SETTING.maxAttempt
    ) {
      throw new AttemptRangeError();
    }
  }

  #validateAttempt(input) {
    const attempt = input.trim();
    this.#validateAttemptType(attempt);
    this.#validateAttemptRange(attempt);
  }

  get() {
    return { cars: this.#carArray, attempt: this.#attempt };
  }
}

export default SetGame;
