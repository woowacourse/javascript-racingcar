const { randomGenerator } = require('./randomGenerator');
const { GAME_VALUE } = require('./constants');

class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  move(randomNumber) {
    if (randomNumber >= GAME_VALUE.MOVING_BOUNDARY_VALUE) this.#distance++;
  }

  getCarInfo() {
    return { name: this.#name, distance: this.#distance };
  }
}

module.exports = { Car };
