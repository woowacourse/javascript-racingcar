const { printCar } = require('./OutputView');
const Console = require('./utils/Console');

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

  move(go) {
    if (go) {
      this.#position += 1;
    }
  }

  print() {
    printCar(this.#name, this.#position);
  }
}

module.exports = Car;
