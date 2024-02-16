import CONFIG from './constants/config';
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
    if (this.#pickRandomNumber() >= CONFIG.CAR_MOVING_CONDITION) {
      this.#position += 1;
    }
  }

  printPosition() {
    const positionString = '-'.repeat(this.#position);
    OutputView.printCarPosition(this.#name, positionString);
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}

export default Car;
