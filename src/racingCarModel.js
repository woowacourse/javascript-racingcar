import Car from './car.js';
import { COUNT_DEFAULT } from './common/constants.js';

export default class RacingCarModel {
  constructor() {
    this.cars = [];
    this.racingCount = COUNT_DEFAULT;
  }

  init() {
    this.cars = [];
    this.racingCount = COUNT_DEFAULT;
  }

  setCars(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }

  setRacingCount(racingCount) {
    this.racingCount = racingCount;
  }

  getWinnners() {
    return this.cars
      .filter((car) => car.moveCount === this.getMaxMoveCount())
      .map((car) => car.name);
  }

  getMaxMoveCount() {
    return Math.max(...this.cars.map((car) => car.moveCount));
  }
}
