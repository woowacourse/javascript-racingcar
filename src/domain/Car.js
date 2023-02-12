const { GAME } = require('../utils/constants');
const { randomGenerator } = require('../utils/common');
class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  move() {
    const randomNumber = randomGenerator.getBetween(
      GAME.MOVE_CONDITION.min,
      GAME.MOVE_CONDITION.max,
    );
    if (randomNumber < GAME.MOVE_CONDITION.mid) {
      return false;
    }
    this.#distance += 1;
    return true;
  }

  isFinish(winningDistance) {
    return this.#distance >= winningDistance;
  }

  getName() {
    return this.#name;
  }

  getDistance() {
    return this.#distance;
  }
}

module.exports = Car;
