import throwError from '../utils/throwError.js';
import validateCarName from '../validation/validate/validateCarName.js';
import OutputView from '../views/OutputView.js';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
    this.#validate();
  }

  #validate() {
    validateCarName(this.#name);
  }

  move() {
    this.#position++;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}

export default Car;
