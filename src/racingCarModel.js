import { COUNT } from './common/constants.js';

import Car from './car.js';

export default class RacingCarModel {
  #cars;

  #racingCount;

  constructor() {
    this.#cars = [];
    this.#racingCount = COUNT.DEFAULT;
  }

  init() {
    this.#cars = [];
    this.#racingCount = COUNT.DEFAULT;
  }

  getWinnners() {
    return this.#cars
      .filter((car) => car.moveCount === this.#getMaxMoveCount())
      .map((car) => car.name);
  }

  #getMaxMoveCount() {
    return Math.max(...this.#cars.map((car) => car.moveCount));
  }

  getCars() {
    return this.#cars;
  }

  createCars(carNames) {
    this.#cars = carNames.map((name) => new Car(name));
  }

  getRacingCount() {
    return this.#racingCount;
  }

  setRacingCount(racingCount) {
    this.#racingCount = racingCount;
  }
}
