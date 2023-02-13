const CONSTANTS = require('../Constant/Constants');
const { RACE_ERROR_MESSAGE } = require('../Constant/ErrorMessage');

class Car {
  #name;
  #position;

  constructor(name) {
    this.validate(name);
    this.#name = name;
    this.#position = CONSTANTS.defaultPostion;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  validate(name) {
    if (!name.length || name.length > CONSTANTS.maxNameLength) {
      throw new Error(RACE_ERROR_MESSAGE.lengthOfName);
    }
  }

  move(number) {
    if (number >= CONSTANTS.minNumberOfMoving) {
      this.#position += 1;
    }
  }
}

module.exports = Car;
