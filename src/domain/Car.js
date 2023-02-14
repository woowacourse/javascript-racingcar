const { GAME_VALUE } = require('../constants');

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move(randomNumber) {
    if (randomNumber >= GAME_VALUE.MOVING_BOUNDARY_VALUE) this.#position++;
  }

  getCarInfo() {
    return { name: this.#name, position: this.#position };
  }
}

module.exports = { Car };
