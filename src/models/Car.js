import { CAR_RULE, RANDOM_NUMBER_RANGE } from '../constants/rule.js';
import { RandomNumber } from '../utils/index.js';

class Car {
  #name = '';

  #step = 0;

  constructor(name) {
    this.#name = name;
  }

  getRandomNumber() {
    const { start, end } = RANDOM_NUMBER_RANGE;

    return RandomNumber.pickNumberInRange(start, end);
  }

  move() {
    if (this.getRandomNumber() >= CAR_RULE.forwardThreshold) {
      this.#step += 1;
    }
  }

  getCarInfo() {
    return { name: this.#name, step: this.#step };
  }
}

export default Car;
