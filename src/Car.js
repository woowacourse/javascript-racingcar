import OutputView from './views/OutputView';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  #pickRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  move() {
    if (this.#pickRandomNumber() >= 4) {
      this.#position += 1;
    }
  }

  printPosition() {
    const positionString = '-'.repeat(this.#position);
    OutputView.printCarPosition(this.#name, positionString);
  }

  getData() {
    return { name: this.#name, position: this.#position };
  }
}

export default Car;
