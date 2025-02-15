import { MOVE_CONDITION_BOUNDARY } from "../constants/constants.js";
class Car {
  #name;
  #count = 0;

  constructor(name) {
    this.#name = name;
  }

  move(shouldMove) {
    if (shouldMove >= MOVE_CONDITION_BOUNDARY) this.#count++;
  }

  get name() {
    return this.#name;
  }

  get count() {
    return this.#count;
  }
}

export default Car;
