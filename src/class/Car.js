import { generateRandomNumber } from '../utils/racingGame.js';
import { MOVE_NUMBER } from '../constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.racingCount = 0;
  }

  getName() {
    return this.name;
  }

  move() {
    if (
      generateRandomNumber(MOVE_NUMBER.MIN, MOVE_NUMBER.MAX) <
      MOVE_NUMBER.AT_LEAST
    ) {
      return false;
    }
    this.racingCount += 1;
    return true;
  }
}
