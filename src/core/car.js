import { CAN_ADVANCE } from '../constants/constant.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  isAdvance(randomInt) {
    if (randomInt >= CAN_ADVANCE) {
      this.score += 1;
    }
  }
}
