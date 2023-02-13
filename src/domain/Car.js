import Validator from "./Validator.js";
class Car {
  #name;
  #currentDistance;

  constructor(name) {
    Validator.validateCarName(name);
    this.#name = name;
    this.#currentDistance = 0;
  }

  move() {
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
