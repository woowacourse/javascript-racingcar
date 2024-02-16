import CONFIG from './constants/config';

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  #pickRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  move() {
    if (this.#pickRandomNumber() >= CONFIG.CAR_MOVING_CONDITION) {
      this.#position += 1;
    }
  }
}

export default Car;
