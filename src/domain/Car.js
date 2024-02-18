const CONDITIONS = require('../constant/Conditions.js');
const Validator = require('../utils/validator.js');

class Car {
  #name;
  #distance;

  constructor(name) {
    Validator.carInstanceName(name);
    this.#name = name;
    this.#distance = 0;
  }

  tryMove(number) {
    if (number >= CONDITIONS.minMoveCondition) this.#distance += CONDITIONS.moveDistance;

    return { carName: this.#name, distance: this.#distance };
  }

  isWinner(maxMoveCount) {
    if (maxMoveCount === this.#distance) return this.#name;
  }
}

module.exports = Car;
