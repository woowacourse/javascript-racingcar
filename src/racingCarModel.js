import Car from './car.js';
import { COUNT } from './common/constants.js';

export default class RacingCarModel {
  constructor() {
    this.cars = [];
    this.racingCount = COUNT.DEFAULT;
  }

  setCars(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }

  setRacingCount(racingCount) {
    this.racingCount = racingCount;
  }
}
