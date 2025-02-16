import { MOVE_UNIT } from '../constant/constant.js';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  moveForward() {
    this.#position += MOVE_UNIT;
  }
}

export default Car;
