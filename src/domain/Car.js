const { MOVE_CHECK_NUMBER } = require('../utils/constants');

class Car {
  #name;
  #state;
  constructor(name) {
    this.#name = name;
    this.#state = 0;
  }

  move(moveNumber, isCarMoved) {
    if (isCarMoved(moveNumber)) this.#state += 1;
    return this.#state;
  }

  getName() {
    return this.#name;
  }

  getState() {
    return this.#state;
  }
}

module.exports = Car;
