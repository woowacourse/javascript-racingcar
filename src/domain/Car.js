import { DEFAULT_POSITION, UNIT_POSITION } from '../constants/MAGIC_NUMBER.js';

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

  getInfo() {
    return { name: this.#name, position: this.#position };
  }
}

export default Car;
