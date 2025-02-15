import { NUMBER } from "../constants/Number.js";

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = NUMBER.INIT_POSITION;
  }

  move() {
    const FOWARD = NUMBER.MOVE_POSITION;
    this.#position += FOWARD;
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
