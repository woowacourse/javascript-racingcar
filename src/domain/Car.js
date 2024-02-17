const { RULES } = require('../constant/Conditions.js');
const pickRandomNumberInRange = require('../utils/pickRandomNumberInRange.js');

class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  tryMove() {
    const randomNumber = pickRandomNumberInRange(RULES.minRandomNumberRange, RULES.maxRandomNumberRange);

    if (randomNumber >= RULES.minMoveCondition) this.#distance += RULES.moveDistance;

    return { carName: this.#name, distance: this.#distance };
  }

  isWinner(maxMoveCount) {
    if (maxMoveCount === this.#distance) return this.#name;
  }
}

module.exports = Car;
