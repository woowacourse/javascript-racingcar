const { RANDOM } = require("../utils/Constant");

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  decideGoAndStop(randomNumber) {
    if (randomNumber >= RANDOM.OVER_LIMIT) this.#position++;
  }

  getPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }
}

module.exports = Car;
