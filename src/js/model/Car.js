import { getRandomNumber } from '../utils/getNumber.js';
import { isEffectiveScore } from '../utils/validation.js';
import { STANDARD } from '../utils/constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  tryMoveForward() {
    const number = getRandomNumber(STANDARD.MIN_SCORE, STANDARD.MAX_SCORE);
    if (isEffectiveScore(number)) {
      this.distance += 1;
    }
  }
}
