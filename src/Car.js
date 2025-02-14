import { DEFAULT_POSITION, UNIT_POSITION } from './constants/CarConstants.js';

class Car {
  #name;

  #position;

  constructor(name) {
    this.#name = name;
    this.#position = DEFAULT_POSITION;
  }

  move() {
    this.#position += UNIT_POSITION;
  }

  getCarPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }
}

export default Car;
