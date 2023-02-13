const { MINIMUM_RANDOM_NUMBER_TO_MOVE } = require('../constants/numbers');

class Car {
  #name;
  #progressCount;

  constructor(name) {
    this.#name = name;
    this.#progressCount = 0;
  }

  tryProgress(randomNumber) {
    if (this.canProgress(randomNumber)) {
      this.#progressCount++;
    }
  }

  canProgress(randomNumber) {
    return randomNumber >= MINIMUM_RANDOM_NUMBER_TO_MOVE;
  }

  get name() {
    return this.#name;
  }

  get progressCount() {
    return this.#progressCount;
  }
}

module.exports = Car;
