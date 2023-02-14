import * as Random from '../utils/Random';
import Car from './Car';

class Race {
  static FREEZE_CHANCE = 4;

  /** @type {Car[]} */
  #cars;

  /** @type {Random} */
  #random;

  /**
   * @param {Car[]} cars
   * @param random
   */
  constructor(cars, random = Random) {
    this.#cars = cars;
    this.#random = random;
  }

  canCarMove(car) {
    const randomNumber = this.#random.randomNumberBetween(0, 10);
    if (randomNumber < Race.FREEZE_CHANCE) return false;

    return true;
  }

  moveOnce() {
    this.#cars.forEach((car) => {
      if (!this.canCarMove(car)) return;

      car.move();
    });
  }

  getCars() {
    return this.#cars;
  }

  getWinners() {
    const maxPosition = Math.max(...this.#cars.map((car) => car.getPosition()));

    return this.#cars.filter((car) => car.getPosition() === maxPosition);
  }
}

export default Race;
