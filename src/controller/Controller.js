import InputView from "../view/InputView.js";
import Car from "../model/Car.js";
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from "../constants/constants.js";
import { CAR } from "../constants/constants.js";
import { validateCarNames, validateTryCount } from "../utils/validation.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";
import OutputView from "../view/OutputView.js";

export default class Controller {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async run() {
    const carNameInput = await this.validateAndRetry(
      INPUT_MESSAGE.CAR_NAMES,
      validateCarNames,
    );
    const carNames = carNameInput.split(",").map((carName) => carName.trim());
    const tryCount = await this.validateAndRetry(
      INPUT_MESSAGE.TRY_COUNT,
      validateTryCount,
    );

    const cars = carNames.map((carName) => new Car(carName));

    this.runRace(cars, tryCount);
    this.findWinner(cars);
  }

  runRace(cars, tryCount) {
    console.log(OUTPUT_MESSAGE.RESULT);
    for (let i = 0; i < tryCount; i++) {
      this.gameRound(cars);
    }
  }

  findWinner(cars) {
    const max = Math.max(...cars.map((car) => car.position));
    const winners = cars.filter((car) => car.position === max);
    this.outputView.printWinner(winners);
  }

  gameRound(cars) {
    cars.forEach((car) => {
      if (this.isMove(getRandomNumber())) car.move();
      this.outputView.printProgressResult(car.name, car.position);
    });
    console.log("");
  }

  async validateAndRetry(message, validateFn) {
    try {
      const input = await this.inputView.readLineAsync(message);
      validateFn(input);
      return input;
    } catch (e) {
      console.log(e.message);
      return this.validateAndRetry(message, validateFn);
    }
  }

  isMove(number) {
    return number >= CAR.PROGRESS_CRITERIA;
  }
}
