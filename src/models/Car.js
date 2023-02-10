const Validator = require('../validator');
const { INIT_POSITION, STEP } = require('../constants/values');

class Car {
  #name;

  #position = INIT_POSITION;

  constructor(name) {
    Validator.Car.checkName(name);

    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  move() {
    this.#position += STEP;
  }
}

module.exports = Car;
