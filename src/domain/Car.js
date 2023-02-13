const RandomNumberGenerator = require('../utils/RandomNumberGenerator');

class Car {
  #name;
  #progressCount;

  static PROGRESS_CONDITION_NUMBER = 4;
  static MIN_PROGRESS_CONDITION_NUMBER = 0;
  static MAX_PROGRESS_CONDITION_NUMBER = 9;

  constructor(name) {
    this.#name = name;
    this.#progressCount = 0;
  }

  tryProgress(conditionNumber) {
    if (this.canProgress(conditionNumber)) {
      this.#progressCount++;
    }
  }

  canProgress(
    conditionNumber = RandomNumberGenerator.generate(
      Car.MIN_PROGRESS_CONDITION_NUMBER,
      Car.MAX_PROGRESS_CONDITION_NUMBER,
    ),
  ) {
    return conditionNumber >= Car.PROGRESS_CONDITION_NUMBER;
  }

  getName() {
    return this.#name;
  }

  getProgressCount() {
    return this.#progressCount;
  }
}

module.exports = Car;
