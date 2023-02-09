import { CAR } from '../constants/index.js';

class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = CAR.initialDistance;
  }

  getName() {
    return this.#name;
  }

  getDistance() {
    return this.#distance;
  }

  move() {
    this.#distance += CAR.moveUnit;
  }
}

export default Car;
