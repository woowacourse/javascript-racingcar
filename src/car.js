import { CAR, COUNT, RANDOM } from './common/constants.js';

export default class Car {
  constructor(name) {
    this.isMoved = false;
    this.moveCount = COUNT.DEFAULT;
    this.name = name;
  }

  moveForward() {
    if (Car.#getRandomDigit() < CAR.MIN_MOVE_FORWARD_CONDITION) {
      this.isMoved = false;

      return;
    }

    this.isMoved = true;
    this.moveCount += 1;
  }

  static #getRandomDigit() {
    return Math.floor(Math.random() * (RANDOM.MAX_DIGIT - RANDOM.MIN_DIGIT + 1)) + RANDOM.MIN_DIGIT;
  }
}
