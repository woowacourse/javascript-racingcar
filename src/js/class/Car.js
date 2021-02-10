import { GAME } from '../util-model/constant.js';
import { getRandomNumber } from '../util-model/getRandomNumber.js';

export class Car {
  constructor(name) {
    this.name = name;
    this.forwardCount = 0;
  }

  isMovingForward(score = getRandomNumber()) {
    return score >= GAME.THRESHOLD_SCORE;
  }

  resetForwardCount() {
    this.forwardCount = 0;
  }
}
