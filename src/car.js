import { generateRandomNumber } from './utils/common.js';
import { NUMBER_FOR_MOVE, STEP_SIGN } from './utils/constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
    this.stepByRound = [];
  }

  randomMove() {
    const number = generateRandomNumber();
    if (number >= NUMBER_FOR_MOVE.MOVE_CRITERIA) {
      this.step += 1;
      this.stepByRound.push(STEP_SIGN.GO);
      return;
    }
    this.stepByRound.push(STEP_SIGN.STOP);
  }

  resetStep() {
    this.step = 0;
    this.stepByRound = [];
  }
}
