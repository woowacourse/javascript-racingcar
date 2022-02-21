import { MIN_ADVANCE_VALUE } from '../constants/constant.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.scoreBoard = [];
  }

  tryMoveForward(randomInt) {
    if (randomInt >= MIN_ADVANCE_VALUE) {
      this.score += 1;
      this.scoreBoard.push(1);
      return;
    }

    this.scoreBoard.push(0);
  }
}
