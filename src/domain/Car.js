import { RULES } from '../statics/constants';
import Random from '../utils/Random';

class Car {
  #name;

  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move(canMoving) {
    canMoving && this.#position++;
  }

  get position() {
    return this.#position;
  }

  get name() {
    return this.#name;
  }
}

export default Car;
