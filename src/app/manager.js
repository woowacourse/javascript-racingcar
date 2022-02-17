import { ERROR_MESSAGE } from '../lib/constants.js';
import { isNumberBelowZero } from '../lib/utils.js';
import Car from './car.js';

class RacingCarGameManager {
  constructor() {
    this.#init();
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

  static goForward(car) {
    car.goForward();
  }

  getWinners() {
    const max = Math.max(...this.cars.map(({ progress }) => progress));
    const winners = this.cars.reduce(
      (arr, { name, progress }) => (progress === max ? [...arr, name] : [...arr]),
      [],
    );
    return winners;
  }

  #init() {
    this.cars = null;
    this.count = null;
  }
}
export default RacingCarGameManager;
