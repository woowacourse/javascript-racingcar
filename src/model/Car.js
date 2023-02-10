const { GAME } = require('../constant/constants');
const common = require('../utils/common');

class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  move() {
    const randomNumber = common.generateRandomNumberInRange(
      GAME.MOVE_CONDITION.min,
      GAME.MOVE_CONDITION.max,
    );
    if (randomNumber < GAME.MOVE_CONDITION.satisfaction) {
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
