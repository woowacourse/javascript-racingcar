const { GAME } = require('../constant/constants');

class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  move(randomNumber) {
    if (randomNumber >= GAME.MOVE_CONDITION.satisfaction) this.#distance += 1;
  }

  getName() {
    return this.#name;
  }

  getDistance() {
    return this.#distance;
  }
}

module.exports = Car;
