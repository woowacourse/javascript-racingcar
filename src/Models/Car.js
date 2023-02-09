const CONSTANTS = require('../Constant/Constants');

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = CONSTANTS.defaultPostion;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  move(number) {
    if (number >= CONSTANTS.minNumberOfMoving) {
      this.#position += 1;
    }
  }
}

module.exports = Car;
