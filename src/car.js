import { generateRandomNumber } from './utils/common.js';
import { NUMBER_FOR_MOVE } from './utils/constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
  }

  randomMove() {
    const number = generateRandomNumber();
    if (number >= NUMBER_FOR_MOVE.MOVE_CRITERIA) {
      this.step += 1;
    }
  }

  resetStep() {
    this.step = 0;
  }
}
