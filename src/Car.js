import { generateRandomNumber } from './utils/racingGame.js';
import { MOVE_CONDITION_NUMBER } from './constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.racingCount = 0;
  }

  resetRacingCount() {
    this.racingCount = 0;
  }

  move() {
    if (generateRandomNumber() < MOVE_CONDITION_NUMBER) {
      return;
    }
    this.racingCount += 1;
  }
}
