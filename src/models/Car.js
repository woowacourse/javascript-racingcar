const { CAR_RULE } = require('../constants/rule');
const { ERROR_MESSAGE } = require('../constants/message');

class Car {
  #name;

  #distance = CAR_RULE.initDistance;

  constructor(name) {
    Car.#validate(name);
    this.#name = name;
  }

  static #validate(name) {
    if (name.length > CAR_RULE.maxLength) {
      throw new Error(ERROR_MESSAGE.overNameLength);
    }
    if (name.trim().length === 0) {
      throw new Error(ERROR_MESSAGE.emptyName);
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
