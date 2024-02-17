import { SYMBOL, TRY_CONSTANTS } from "../Constants/Constants.js";
import { ERROR_MESSAGES, VIEW_MESSAGES } from "../Constants/Messages.js";
import Car from "../Model/Car.js";
import CarValidator from "../Validator/CarValidator.js";
import CommonValidator from "../Validator/CommonValidator.js";
import TryNumValidator from "../Validator/TryNumValidator.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";

const { RESULT_MESSAGE } = VIEW_MESSAGES;
const { DUPLICATED_NAME } = ERROR_MESSAGES;
const { BLANK_SYMBOL } = SYMBOL;

export default class Controller {
  #cars;

  #input = InputView;

  #output = OutputView;

  async run() {
    const carNamesInput = await this.#promptCarNames();
    this.#cars = carNamesInput;

    const tryNum = await this.#promptTry();
    this.#runRace(tryNum);
    console.log(RESULT_MESSAGE);

    const winners = this.#findWinners();
    this.#output.printWinner(winners);
  }

  async #promptCarNames() {
    try {
      const carNames = await this.#input.readCars();
      CommonValidator.check(carNames);
      CarValidator.checkCarName(carNames);

      return carNames.map((name) => new Car(name));
    } catch (error) {
      console.log(error.message);

      return await this.#promptCarNames();
    }
  }

  async #promptTry() {
    try {
      const tryInput = await this.#input.readTry();
      CommonValidator.check(tryInput);
      TryNumValidator.checkTryNum(tryInput);

      console.log(Number(tryInput));
      return Number(tryInput);
    } catch (error) {
      console.log(error.message);
      return await this.#promptTry();
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
