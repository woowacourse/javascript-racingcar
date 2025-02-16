import {
  MOVING_DISTANCE,
  MOVING_THRESHOLD,
} from './constants/configurations.js';

class Car {
  #name;
  #position;

  constructor(name, position) {
    this.#name = name;
    this.#position = position;
  }

  getCarStatus() {
    return { name: this.#name, position: this.#position };
  }

  move(value) {
    if (value >= MOVING_THRESHOLD) this.#position += MOVING_DISTANCE;
  }
}

export default Car;
