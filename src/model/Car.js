import { StaticValue } from "../constants/constants";

class Car {
  #name;
  #distance = 0;

  constructor(name) {
    this.#name = name;
  }

  move(randomNumber) {
    if (randomNumber >= StaticValue.MOVE_CONDITION) this.#distance += 1;
  }

  getCurrentDistance() {
    return this.#distance;
  }
}

module.exports = Car;
