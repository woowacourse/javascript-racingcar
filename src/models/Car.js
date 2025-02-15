import { RANDOM_BOUNDARY_NUMBER } from "../constants/constants.js";
class Car {
  #name;
  #count = 0;

  constructor(name) {
    this.#name = name;
  }

  move(number) {
    if (number >= RANDOM_BOUNDARY_NUMBER) this.#count++;
  }

  get name() {
    return this.#name;
  }

  get count() {
    return this.#count;
  }
}

export default Car;
