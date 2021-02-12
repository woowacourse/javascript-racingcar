import { RACING_RULE } from '../constants/racingRule.js';

export class Car {
  constructor(name) {
    this.name = name;
    this.forwardCount = 0;
  }

  getName() {
    return this.name;
  }

  getForwardCount() {
    return this.forwardCount;
  }

  resetForwardCount() {
    this.forwardCount = 0;
  }

  addForwardCount() {
    this.forwardCount += 1;
  }

  isMovingForward(score) {
    const { MIN_SCORE, MAX_SCORE, THRESHOLD_SCORE } = RACING_RULE;

    if (!score) {
      score = this.getRandomNumber(MIN_SCORE, MAX_SCORE);
    }
    return score >= THRESHOLD_SCORE;
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
