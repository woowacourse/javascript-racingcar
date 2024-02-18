import Car from '../Model/Car';
import { CarValidator, CommonValidator, TryNumValidator } from '../Validator';

export default class GameSetupManager {
  #input;

  constructor(inputView) {
    this.#input = inputView;
  }

  async setup() {
    const cars = await this.#executeOrRetryAsync(this.#setupCarsFromInput.bind(this));
    const tryNum = await this.#executeOrRetryAsync(this.#setupTryNumFromInput.bind(this));

    return { cars, tryNum };
  }

  async #executeOrRetryAsync(asyncFn, context) {
    try {
      return await asyncFn.call(context);
    } catch (error) {
      console.log(error.message);
      return this.#executeOrRetryAsync(asyncFn, context);
    }
  }

  async #setupCarsFromInput() {
    const carNames = await this.#input.readCars();
    CommonValidator.check(carNames);
    CarValidator.checkCarName(carNames);

    return carNames.map((name) => new Car(name));
  }

  async #setupTryNumFromInput() {
    const tryInput = await this.#input.readTry();
    CommonValidator.check(tryInput);
    TryNumValidator.checkTryNum(tryInput);

    return Number(tryInput);
  }
}
