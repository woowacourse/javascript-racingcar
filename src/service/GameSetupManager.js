import Car from '../domain/car';
import { executeOrRetryAsync } from '../utils';
import { CarValidator, CommonValidator, TryNumValidator } from '../validator';

export default class GameSetupManager {
  #input;

  constructor(inputView) {
    this.#input = inputView;
  }

  async setup() {
    const cars = await executeOrRetryAsync(this.#setupCarsFromInput.bind(this));
    const tryNum = await executeOrRetryAsync(this.#setupTryNumFromInput.bind(this));

    return { cars, tryNum };
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
