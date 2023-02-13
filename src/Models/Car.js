const CONSTANTS = require('../Constant/Constants');
const { RACE_ERROR_MESSAGE } = require('../Constant/ErrorMessage');

class Car {
  #name;
  #position;

  constructor(name) {
    this.validate(name);
    this.#name = name;
    this.#position = CONSTANTS.DEFAULT_POSTION;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  validate(name) {
    if (!name.length || name.length > CONSTANTS.MAX_NAME_LENGTH) {
      throw new Error(RACE_ERROR_MESSAGE.LENGTH_OF_NAME);
    }
  }

  move(number) {
    if (number >= CONSTANTS.MIN_NUMBER_OF_MOVING) {
      this.#position += 1;
    }
  }
}

module.exports = Car;
