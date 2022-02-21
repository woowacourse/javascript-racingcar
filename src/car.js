import { CAR, COUNT_DEFAULT, RANDOM } from './common/constants.js';

export default class Car {
  #name;

  #moveCount;

  constructor(name) {
    this.#name = name;
    this.#moveCount = COUNT_DEFAULT;
  }

  getName() {
    return this.#name;
  }

  getMoveCount() {
    return this.#moveCount;
  }

  #generateRandomDigit() {
    return Math.floor(Math.random() * (RANDOM.MAX_DIGIT - RANDOM.MIN_DIGIT + 1)) + RANDOM.MIN_DIGIT;
  }

  #moveForward() {
    this.#moveCount += 1;
  }

  tryMoveForward() {
    if (this.#generateRandomDigit() >= CAR.MIN_MOVE_FORWARD_CONDITION) {
      this.#moveForward();

      return true;
    }

    return false;
  }
}
