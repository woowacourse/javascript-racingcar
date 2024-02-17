import { SYMBOL, TRY_CONSTANTS } from "../Constants/Constants.js";
import { ERROR_MESSAGES, VIEW_MESSAGES } from "../Constants/Messages.js";
import Car from "../Model/Car.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import AppError from "../utils/Error.js";

const { TRY_RANGE } = TRY_CONSTANTS;
const { RESULT_MESSAGE } = VIEW_MESSAGES;
const { INVALID_TYPE, INVALID_RANGE, DUPLICATED_NAME } = ERROR_MESSAGES;
const { BLANK_SYMBOL } = SYMBOL;

export default class Controller {
  #cars;

  #input = InputView;

  #output = OutputView;

  async run() {
    const str = await this.#promptCarNames();
    this.#cars = str;
    const tryNum = await this.#promptTry();
    this.#runRace(tryNum);
    console.log(RESULT_MESSAGE);

    const winners = this.#findWinners();
    this.#output.printWinner(winners);
  }

  async #promptCarNames() {
    try {
      const carNames = await this.#input.readCars();
      this.#checkCarDuplicate(carNames);

      return carNames.map((name) => new Car(name));
    } catch (error) {
      console.log(error.message);
      return await this.#promptCarNames();
    }
  }

  #checkCarDuplicate(carNames) {
    if (carNames.length !== new Set([...carNames]).size) {
      throw new AppError(DUPLICATED_NAME);
    }
  }

  async #promptTry() {
    try {
      const tryInput = await this.#input.readTry();
      const tryNum = Number(tryInput);
      this.#checkTryNum(tryNum);

      return tryNum;
    } catch (error) {
      console.log(error.message);
      return await this.#promptTry();
    }
  }

  #checkTryNum(number) {
    if (Number.isNaN(number)) {
      throw new AppError(INVALID_TYPE);
    }

    if (number < TRY_RANGE.min || number > TRY_RANGE.max) {
      throw new AppError(INVALID_RANGE);
    }
  }

  #runRace(tryNum) {
    for (let i = 0; i < tryNum; i += 1) {
      this.#cars.forEach((car) => {
        car.move(this.#makeRandomNumber1to10());
        this.#output.printCarCurrentDistance(car);
      });
      console.log(BLANK_SYMBOL);
    }
  }

  #makeRandomNumber1to10() {
    return Math.floor(Math.random() * 10);
  }

  #findWinners() {
    return this.#cars.filter((car) => car.isWinner());
  }
}
