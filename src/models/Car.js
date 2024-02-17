import { RandomNumber } from '../utils/index.js';

class Car {
  #name = '';

  #step = 0;

  constructor(name) {
    this.#name = name;
  }

  move() {
    if (RandomNumber.pickNumber() >= 4) {
      this.#step += 1;
    }
  }

  getCarInfo() {
    return { name: this.#name, step: this.#step };
  }
}

export default Car;
