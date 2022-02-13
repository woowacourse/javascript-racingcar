import { CAR } from '../constants/constants.js';
import RandomUtils from '../utils/random.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = CAR.INITIAL_VALUE;
  }

  move() {
    const randomNumber = RandomUtils.pickRandomNumber();
    if (randomNumber >= CAR.REFERENCE_POINT_FOR_MOVEMENT) {
      this.position += CAR.ONE_MOVE;
    }
  }
}
