import { CONFIG } from '../constants';

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

  move(randomNumber) {
    if (this.canMove(randomNumber)) this.#position += 1;
  }

  canMove(randomNumber) {
    return randomNumber >= CONFIG.CAR_MOVING_CONDITION;
  }

  isMaxPosition(maxPosition) {
    return this.#position === maxPosition;
  }
}

export default Car;
