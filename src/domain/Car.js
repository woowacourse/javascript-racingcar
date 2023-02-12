const { CAR_RULE, ERROR_MESSAGE } = require('../constants');

class Car {
  #name;

  #distance = CAR_RULE.INIT_DISTANCE;

  constructor(name) {
    Car.#validate(name);
    this.#name = name;
  }

  static #validate(name) {
    if (name.length > CAR_RULE.MAX_NAME_LENGTH) {
      throw new Error(ERROR_MESSAGE.OVER_CAR_NAME_LENGTH);
    }
    if (name.trim().length === 0) {
      throw new Error(ERROR_MESSAGE.EMPTY_CAR_NAME);
    }
  }

  move() {
    this.#distance += 1;
  }

  getInfo() {
    return [this.#name, this.#distance];
  }
}

module.exports = Car;
