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

  getCarInfo() {
    const name = this.#name;
    const position = this.#position;
    return { name, position };
  }
}

export default Car;
