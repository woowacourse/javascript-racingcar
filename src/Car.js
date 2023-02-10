import OutputView from './OutputView.js';

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
    OutputView.printCar(this.#name, this.#position);
  }
}

export default Car;
