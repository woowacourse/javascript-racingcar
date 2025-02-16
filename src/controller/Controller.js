import InputView from "../view/InputView.js";
import Car from "../domain/Car.js";
import { INPUT_MESSAGE } from "../constants/message.js";
import { validateCarNames } from "../utils/validation.js";
import Race from "../domain/Race.js";
import Winners from "../domain/Winners.js";
import OutputView from "../view/OutputView.js";

export default class Controller {
  async run() {
    const cars = await this.getCars();
    const race = await this.getRace(cars);

    const outputView = new OutputView();
    const raceResult = race.getRaceResult();
    outputView.printExecutionResult(raceResult);

    const winners = new Winners(cars);
    const winnerNames = winners.getWinners();
    outputView.printWinners(winnerNames);
  }

  async getRace(cars) {
    try {
      const inputView = new InputView();
      const tryCount = await inputView.readLineAsync(INPUT_MESSAGE.TRY_COUNT);
      const race = new Race(cars, tryCount);
      return race;
    } catch (e) {
      console.log(e.message);
      return await this.getRace(cars);
    }
  }

  async getCars() {
    const inputView = new InputView();
    const carNameInput = await inputView.validateAndRetry(
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
}
