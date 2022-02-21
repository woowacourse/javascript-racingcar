import { NUMBER } from './utils/constants.js';
import { generateRandomNumber } from './utils/common.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.step = NUMBER.INITIAL_STEP;
  }

  randomMove() {
    const number = generateRandomNumber(NUMBER.RANGE_START, NUMBER.RANGE_END);
    if (number >= NUMBER.STEP_BASE_NUMBER) {
      this.step += NUMBER.STEP;
    }
  }

  resetStep() {
    this.step = NUMBER.INITIAL_STEP;
  }
}
