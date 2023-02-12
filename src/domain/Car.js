const { Settings } = require('../Config');

class Car {
  #name;

  #position;

  constructor(carName) {
    this.#name = carName;
    this.#position = 1;
  }

  move(power) {
    if (power >= Settings.MOVING_POWER) {
      this.#position += 1;
    }
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}

module.exports = Car;
