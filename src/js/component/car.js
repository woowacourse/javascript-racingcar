import { CAN_ADVANCE } from '../constants/constant.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  addScore(randomInt) {
    if (randomInt >= CAN_ADVANCE) {
      this.score += 1;
    }
  }
}
