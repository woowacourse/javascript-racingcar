const { randomGenerator } = require('./randomGenerator');
const { GAME_VALUE } = require('./constants');

class Car {
  #name;
  #movingLog;

  constructor(name) {
    this.#name = name;
    this.#movingLog = 0;
  }

  move() {
    const randomNumber = randomGenerator.generateNumber();
    if (randomNumber >= GAME_VALUE.MOVING_BOUNDARY_VALUE) this.#movingLog++;
  }

  getCarInfo() {
    return { name: this.#name, movingLog: this.#movingLog };
  }
}

module.exports = { Car };
