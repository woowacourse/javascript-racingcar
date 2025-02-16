import InputView from "../view/InputView.js";
import Car from "../domain/Car.js";
import Race from "../domain/Race.js";
import Winners from "../domain/Winners.js";
import OutputView from "../view/OutputView.js";
import { validateCarNames } from "../utils/validation.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";
import { INPUT_MESSAGE } from "../constants/message.js";

export default class Controller {
  constructor() {
    this.inputView = new InputView();
  }

  async run() {
    const cars = await this.getValidatedCars();
    const { race, tryCount } = await this.getValidatedRaceAndTryCount(cars);
    const randomNumbers = this.getRandomNumbers(tryCount, cars.length);

    const raceResult = race.getRaceResult(randomNumbers);
    const outputView = new OutputView();
    outputView.printExecutionResult(raceResult);

    const winners = new Winners(cars);
    const winnerNames = winners.getWinners();
    outputView.printWinners(winnerNames);
  }

  getRandomNumbers(tryCount, carsLength) {
    return Array.from({ length: tryCount }, () => [
      ...Array.from({ length: carsLength }, () => getRandomNumber(0, 9)),
    ]);
  }

  async getValidatedRaceAndTryCount(cars) {
    try {
      const tryCount = await this.inputView.readLineAsync(
        INPUT_MESSAGE.TRY_COUNT
      );
      const race = new Race(cars, tryCount);
      return { race, tryCount };
    } catch (e) {
      console.log(e.message);
      return await this.getValidatedRaceAndTryCount(cars);
    }
  }

  async getValidatedCars() {
    const carNameInput = await this.inputView.validateAndRetry(
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
