const { CAR_RULE, ERROR_MESSAGE } = require('../constants');
const { StringValidator } = require('../utils/validator');

class Car {
  #name;

  #distance = CAR_RULE.INIT_DISTANCE;

  constructor(name) {
    this.#validate(name);
    this.#name = name;
  }

  #validate(name) {
    if (StringValidator.hasFrontAndBackSpaces(name)) {
      throw new Error(ERROR_MESSAGE.FRONT_AND_BACK_SPACES);
    }
    if (!this.#isValidNameLength(name)) {
      throw new Error(ERROR_MESSAGE.OVER_CAR_NAME_LENGTH);
    }
  }

  #isValidNameLength(name) {
    return name.length >= CAR_RULE.MIN_NAME_LENGTH && name.length <= CAR_RULE.MAX_NAME_LENGTH;
  }

  move() {
    this.#distance += 1;
  }

  getInfo() {
    return [this.#name, this.#distance];
  }
}

module.exports = Car;
