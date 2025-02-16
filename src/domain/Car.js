import DEFINITION from '../constants/Definition.js';
import { Validator } from '../utils/Validator.js';

class Car {
  #name;
  #position;

  constructor(name) {
    Validator.validateName(name, DEFINITION.MAX_NAME_LENGTH);
    this.#name = name;
    this.#position = 0;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  moveForward(inputNumber) {
    if (inputNumber < DEFINITION.MOVE_CONDITION) {
      return;
    }
    this.#position++;
  }
}

export default Car;
