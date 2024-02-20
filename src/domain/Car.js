import { RandomNumber } from '../utils/index.js';
import { MOVE_FORWARD_THRESHOLD } from '../constants/index.js';

class Car {
  #name = '';

  #step = 0;

  constructor(name) {
    this.#name = name;
  }

  movement() {
    if (RandomNumber.pickNumber() >= MOVE_FORWARD_THRESHOLD) this.#step += 1;
  }

  getCarInfo() {
    return { name: this.#name, step: this.#step };
  }
}

export default Car;
