import { RACE } from '../constants/race.js';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move() {
    this.#position += RACE.FOWARD_UNIT;
  }

  comparePosition(otherPosition) {
    return Math.max(this.#position, otherPosition);
  }

  get position() {
    return this.#position;
  }

  get name() {
    return this.#name;
  }
}

export default Car;
