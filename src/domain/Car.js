import { RandomNumber } from '../utils/index.js';
import { RANDOM_BOUNDARY } from '../constants/index.js';

class Car {
  #name = '';

  #step = 0;

  constructor(name) {
    this.#name = name;
  }

  movement() {
    if (RandomNumber.pickNumber() >= RANDOM_BOUNDARY) this.#step += 1;
  }

  getCarInfo() {
    return { name: this.#name, step: this.#step };
  }
}

export default Car;
