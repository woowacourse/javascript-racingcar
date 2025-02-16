import DEFINITION from '../constants/Definition.js';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  moveForward(randomValue) {
    if (randomValue < DEFINITION.MOVE_CONDITION) {
      return;
    }
    this.#position++;
  }
}

export default Car;
