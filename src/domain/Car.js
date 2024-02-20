import { NUMBERS } from '../constants/constants';

class Car {
  #name;
  #distance;
  constructor(name) {
    this.#name = name;
    this.#distance = NUMBERS.DEFAULT_CAR_DISTANCE;
  }

  canMove(randomValue) {
    return randomValue >= NUMBERS.MOVEMENT_MINIMUM_THRESHOLD;
  }

  move(randomValue) {
    if (this.canMove(randomValue)) {
      this.setDistance(this.#distance + NUMBERS.MOVE_INCREMENT);
    }
  }

  setDistance(distance) {
    this.#distance = distance;
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
