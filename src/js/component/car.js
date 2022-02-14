import { CAN_ADVANCE } from '../constants/constant.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  canAdvance = randomInt => {
    if (randomInt >= CAN_ADVANCE) {
      this.addScore();
    }
  };

  addScore() {
    this.score += 1;
  }
}
