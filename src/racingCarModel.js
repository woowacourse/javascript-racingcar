import Car from './car.js';
import { COUNT_DEFAULT } from './common/constants.js';

export default class RacingCarModel {
  #cars;

  #racingCount;

  constructor() {
    this.init();
  }

  init() {
    this.#cars = [];
    this.#racingCount = COUNT_DEFAULT;
  }

  getCars() {
    return this.#cars;
  }

  setCars(carNames) {
    this.#cars = carNames.map((name) => new Car(name));
  }

  getRacingCount() {
    return this.#racingCount;
  }

  setRacingCount(racingCount) {
    this.#racingCount = racingCount;
  }

  getWinnners() {
    return this.#cars
      .filter((car) => car.getMoveCount() === this.#getMaxMoveCount())
      .map((car) => car.getName());
  }

  #getMaxMoveCount() {
    return Math.max(...this.#cars.map((car) => car.getMoveCount()));
  }
}
