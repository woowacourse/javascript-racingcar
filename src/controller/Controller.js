import InputView from "../view/InputView.js";
import Car from "../domain/Car.js";
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from "../constants/message.js";
import { validateCarNames, validateTryCount } from "../utils/validation.js";
import Race from "../domain/Race.js";
import Winners from "../domain/Winners.js";
import OutputView from "../view/OutputView.js";

export default class Controller {
  async run() {
    const cars = await this.getCars();

    const tryCount = await this.validateAndRetry(
      INPUT_MESSAGE.TRY_COUNT,
      validateTryCount
    );

    const outputView = new OutputView();
    const race = new Race(cars, tryCount);
    const raceResult = race.getRaceResult();
    outputView.printExecutionResult(raceResult);

    const winners = new Winners(cars);
    const winnerNames = winners.getWinners();
    outputView.printWinners(winnerNames);
  }

  async getCars() {
    const carNameInput = await this.validateAndRetry(
      INPUT_MESSAGE.CAR_NAMES,
      validateCarNames
    );
    const carNames = carNameInput.split(",").map((carName) => carName.trim());
    const cars = this.createCars(carNames);
    return cars;
  }

  async createCars(carNames) {
    try {
      return Array.from(carNames, (carName) => new Car(carName));
    } catch (e) {
      console.log(e.message);
      return await this.getCars();
    }
  }

  async validateAndRetry(message, validateFn) {
    try {
      const inputView = new InputView();
      const input = await inputView.readLineAsync(message);
      validateFn(input);
      return input;
    } catch (e) {
      console.log(e.message);
      return this.validateAndRetry(message, validateFn);
    }
  }
}
