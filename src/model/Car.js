const { GAME } = require('../utils/constants');

const RandomGenerator = require('./RandomGenerator');
class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  move() {
    const randomNumber = RandomGenerator.getBetween(
      GAME.MOVE_CONDITION.min,
      GAME.MOVE_CONDITION.max,
    );
    if (randomNumber < GAME.MOVE_CONDITION.mid) {
      return;
    }
    this.#distance += 1;
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
