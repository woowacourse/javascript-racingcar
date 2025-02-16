import InputView from "../view/InputView.js";
import Car from "../domain/Car.js";
import { INPUT_MESSAGE } from "../constants/message.js";
import { validateCarNames, validateTryCount } from "../utils/validation.js";
import Race from "../domain/Race.js";
import Winners from "../domain/Winners.js";

export default class Controller {
  async run() {
    const cars = await this.getCars();

    const tryCount = await this.validateAndRetry(
      INPUT_MESSAGE.TRY_COUNT,
      validateTryCount
    );

    const race = new Race(cars, tryCount);
    race.runRace();

    const winners = new Winners(cars);
    const winnerNames = winners.getWinners();
    console.log(`최종 우승자: ${winnerNames.join(", ")}`);
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
      const cars = [];
      carNames.forEach((carName) => {
        cars.push(new Car(carName));
      });
      return cars;
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
