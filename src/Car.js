const RandomNumberGenerator = require('./utils/RandomNumberGenerator');

class Car {
  #name;
  #progressCount;

  constructor(name) {
    this.#name = name;
    this.#progressCount = 0;
  }

  tryProgress() {
    if (RandomNumberGenerator.generate() >= 4) {
      this.#progressCount++;
    }
  }
}

module.exports = Car;
