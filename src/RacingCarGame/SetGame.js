import { readCarNames, readAttempt } from "../view/InputView.js";
import { printError } from "../view/OutputView.js";
import Car from "./Car.js";
import { splitCarNames } from "../utils/StringParser.js";
import Validator from "./Validator.js";

class SetGame {
  #carArray;
  #attempt;

  constructor() {
    this.#carArray = [];
  }

  async init() {
    await this.#setCarName();
    await this.#setAttempt();
  }

  async #readCarName() {
    const input = await readCarNames();
    const carNames = splitCarNames(input);

    this.#createCars(carNames);
  }

  async #setCarName() {
    while (true) {
      try {
        await this.#readCarName();
        break;
      } catch (error) {
        printError(error);
      }
    }
  }

  #createCars(carNames) {
    carNames.forEach((carName) => {
      Validator.carName(carName);

      const newCar = new Car(carName);
      this.#carArray.push(newCar);
    });
  }

  async #readAttempt() {
    const inputAttempt = await readAttempt();
    Validator.attempt(inputAttempt);
    this.#attempt = inputAttempt;
  }

  async #setAttempt() {
    while (true) {
      try {
        await this.#readAttempt();
        break;
      } catch (error) {
        printError(error);
      }
    }
  }

  get() {
    return { cars: this.#carArray, attempt: this.#attempt };
  }
}

export default SetGame;
