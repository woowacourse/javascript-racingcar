import { NUMBERS } from '../constants/constants';
import RandomNumberGenerator from '../utils/RandomNumberGenerator';

class Car {
  #name;
  #distance;
  constructor(name) {
    this.#name = name;
    this.#distance = NUMBERS.DEFAULT_CAR_DISTANCE;
  }

  static canMove(randomValue) {
    return randomValue >= NUMBERS.MINIMUM_MOVEMENT_THRESHOLD;
  }

  move(randomValue) {
    if (this.canMove(randomValue)) {
      this.#distance += NUMBERS.MOVE_INCREMENT;
    }
  }

  getName() {
    return this.#name;
  }

  getDistance() {
    return this.#distance;
  }

  getDistanceString() {
    return `${this.#name} : ${'-'.repeat(this.#distance)}\n`;
  }
}

export default Car;
