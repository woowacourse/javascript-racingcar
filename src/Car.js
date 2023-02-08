const RandomNumberGenerator = require('./utils/RandomNumberGenerator');

class Car {
  #name;
  #progressCount;

  constructor(name) {
    this.#name = name;
    this.#progressCount = 0;
  }

  tryProgress() {
    if (this.canProgress()) {
      this.#progressCount++;
    }
  }

  canProgress() {
    return RandomNumberGenerator.generate() >= 4;
  }

  getName() {
    return this.#name;
  }

  getProgressCount() {
    return this.#progressCount;
  }
}

module.exports = Car;
