const CONDITIONS = require('../constant/Conditions.js');
const getRandomNumber = require('../utils/getRandomNumber.js');

class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  tryMove() {
    const randomNumber = getRandomNumber(CONDITIONS.minRandomNumberRange, CONDITIONS.maxRandomNumberRange);

    if (randomNumber >= CONDITIONS.minMoveCondition) this.#distance += CONDITIONS.moveDistance;

    return { carName: this.#name, distance: this.#distance };
  }

  isWinner(maxMoveCount) {
    if (maxMoveCount === this.#distance) return this.#name;
  }
}

module.exports = Car;
