const { MOVE_FORWARD, FLAG, NOT_MOVED } = require('../constants');

class Car {
  #name;
  constructor(name) {
    this.#name = name;
  }

  move(step) {
    return step >= FLAG ? MOVE_FORWARD : NOT_MOVED;
  }
}

module.exports = Car;
