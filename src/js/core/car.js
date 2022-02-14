import { MOVE_FORWARD_WHEN_THE_NUMBER_IS_ABOVE } from '../constants/constant.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  moveForward(randomInt) {
    if (randomInt >= MOVE_FORWARD_WHEN_THE_NUMBER_IS_ABOVE) {
      this.score += 1;
    }
  }
}
