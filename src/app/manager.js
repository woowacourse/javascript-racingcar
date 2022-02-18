import { ERROR_MESSAGE, MOVE_CONDITION, RANGE_MAX, RANGE_MIN } from '../lib/constants.js';
import { isNumberBelowZero, pickNumberInRange } from '../lib/utils.js';
import Car from './car.js';

class RacingCarGameManager {
  constructor() {
    this.#init();
  }

  #init() {
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

  goForwardCars() {
    return this.cars.map((car) => {
      const random = pickNumberInRange(RANGE_MIN, RANGE_MAX);
      if (random >= MOVE_CONDITION) {
        car.goForward();
        return { isForward: true, car };
      }
      return { isForward: false, car };
    });
  }

  getWinners() {
    const max = Math.max(...this.cars.map(({ progress }) => progress));
    const winners = this.cars.reduce(
      (arr, { name, progress }) => (progress === max ? [...arr, name] : [...arr]),
      [],
    );
    return winners;
  }
}
export default RacingCarGameManager;
