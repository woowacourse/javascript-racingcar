import CONDITIONS from '../constants/Conditions.js';
import ERRORS from '../constants/Errors.js';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#validate(name);
    this.#name = name.trim();
    this.#position = 0;
  }

  #validate(carStr) {
    this.#validateLength(carStr);
    this.#validateBlank(carStr);
  }

  #validateLength(name) {
    if (name.length > CONDITIONS.maxCarNameLength) {
      throw new Error(ERRORS.carNameLength);
    }
  }

  #validateBlank(name) {
    if (name.length === 0) {
      throw new Error(ERRORS.carNameBlank);
    }
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  moveForward() {
    this.#position++;
  }
}

export default Car;
