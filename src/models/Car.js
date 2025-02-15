import { MOVE_THRESHOLD } from "../constants/constants.js";
class Car {
  #name;
  #count = 0;

  constructor(name) {
    this.#name = name;
  }

  move(number) {
    if (number >= MOVE_THRESHOLD) this.#count++;
  }

  get name() {
    return this.#name;
  }

  get count() {
    return this.#count;
  }
}

export default Car;
