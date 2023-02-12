/* eslint-disable lines-between-class-members */
const { StaticValue } = require('../constants/constants');

class Car {
  #name;
  #distance = 0;

  constructor(name) {
    this.#name = name;
  }

  move(randomNumber) {
    if (randomNumber >= StaticValue.MOVE_CONDITION) this.#distance += 1;
  }

  getName() {
    return this.#name;
  }

  getCurrentDistance() {
    return this.#distance;
  }
}

module.exports = Car;
