import Validator from "./Validator.js";
class Car {
  #name;
  #currentDistance;

  constructor(name) {
    Validator.validateCarName(name);
    this.#name = name;
    this.#currentDistance = 0;
  }

  move(number) {
    if (number < 4) return;
    this.#currentDistance += 1;
  }

  getName() {
    return this.#name;
  }

  getCurrentDistance() {
    return this.#currentDistance;
  }
}

export default Car;
