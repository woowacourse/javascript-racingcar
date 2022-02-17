import { MIN_ADVANCE_VALUE } from '../constants/constant.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  tryMoveForward(randomInt) {
    if (randomInt >= MIN_ADVANCE_VALUE) {
      this.score += 1;
    }
  }
}
