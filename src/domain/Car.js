const { FORWARD_CONDITION } = require('../constants/value');

class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  move(condition) {
    if (condition >= FORWARD_CONDITION) {
      this.#position += 1;
    }
  }

}

module.exports = Car;
