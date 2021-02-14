import { RACING_RULE } from '../constants/racingRule.js';
import { generateRandomDigit } from './generateRandomDigit.js';
export class Car {
  constructor(name) {
    this.name = name;
    this.forwardCount = 0;
  }

  resetForwardCount() {
    this.forwardCount = 0;
  }

  addForwardCount() {
    this.forwardCount += 1;
  }

  isMovingForward(score) {
    if (!score) {
      score = generateRandomDigit();
    }
    return score >= RACING_RULE.THRESHOLD_SCORE;
  }
}
