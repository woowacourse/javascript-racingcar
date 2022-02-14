import { ERROR_MESSAGE } from '../lib/constants.js';
import { isNumberBelowZero } from '../lib/utils.js';
import Car from './car.js';

class RacingCarGameManager {
  constructor() {
    this.cars = null;
    this.count = null;
  }

  setCars(cars) {
    this.cars = cars;
  }

  setCount(count) {
    if (isNumberBelowZero(count)) {
      throw Error(ERROR_MESSAGE.INVALID_COUNT);
    }
    this.count = count;
  }

  getCars() {
    return this.cars;
  }

  getCount() {
    return this.count;
  }

  static makeCars(names) {
    return names.map((name) => new Car(name));
  }
}
export default RacingCarGameManager;
