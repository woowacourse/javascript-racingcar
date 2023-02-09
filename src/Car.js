const { randomGenerator } = require('./randomGenerator');

class Car {
  #name;
  #movingLog;

  constructor(name) {
    this.#name = name;
    this.#movingLog = 0;
  }

  move() {
    const randomNumber = randomGenerator();
    if (randomNumber >= 4) this.#movingLog++;
  }

  getCarInfo() {
    return { name: this.#name, movingLog: this.#movingLog };
  }
}

module.exports = { Car };
