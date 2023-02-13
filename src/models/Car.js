const {
  INITIAL_POSITION,
  STEP,
  MOVE_CONDITION,
} = require('../constants/values');

class Car {
  #name;

  #position = INITIAL_POSITION;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  move(number) {
    if (!this.shouldMove(number)) {
      return;
    }

    this.#position += STEP;
  }

  shouldMove(number) {
    return number >= MOVE_CONDITION;
  }
}

module.exports = Car;
