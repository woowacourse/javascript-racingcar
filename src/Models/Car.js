const CONSTANTS = require('../Constant/Constants');
const RACE_ERROR_MESSAGE = require('../Constant/ErrorMessage');
const ValidatorConditions = require('../Utils/ValidatorConditions');

class Car {
  #name;
  #position;

  constructor(name) {
    this.validate(name);
    this.#name = name;
    this.#position = CONSTANTS.defaultPostion;
  }

  validate(name) {
    if (ValidatorConditions.isNameLengthBiggerThanMaxLength(name)) {
      throw new Error(RACE_ERROR_MESSAGE.lengthOfName);
    }

    if (ValidatorConditions.isOnlyNumberInName(name)) {
      throw new Error(RACE_ERROR_MESSAGE.invalidInput);
    }

    if (ValidatorConditions.isBlankOrUndefinedTypeInName(name)) {
      throw new Error(RACE_ERROR_MESSAGE.invalidInput);
    }
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
