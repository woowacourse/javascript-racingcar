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

  getPosition() {
    const copyPosition = this.#position;
    return copyPosition;
  }

  getName() {
    const copyName = this.#name;
    return copyName;
  }
}

export default Car;
