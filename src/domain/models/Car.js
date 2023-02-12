const Validator = require('../../validator');
const { INITIAL_POSITION, STEP } = require('../../constants/values');

class Car {
  #name;

  #position = INITIAL_POSITION;

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
