const { MOVE_CRITERIA_NUMBER } = require('../util/constants');

class Car {
  #name;
  #currentDistance;

  constructor(name) {
    this.#name = name;
    this.#currentDistance = 0;
  }

  move(number) {
    if (number < MOVE_CRITERIA_NUMBER.NUMBER) return;
    this.#currentDistance += 1;
  }

  getName() {
    return this.#name;
  }

  getCurrentDistance() {
    return this.#currentDistance;
  }
}

module.exports = Car;
