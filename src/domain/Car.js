const { FORWARD_CONDITION } = require('../constants/value');
const { printCar } = require('../view/OutputView');

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

  print() {
    printCar(this.#name, this.#position);
  }
}

module.exports = Car;
