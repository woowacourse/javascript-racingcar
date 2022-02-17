import { CAR, INIT } from '../constants/constants.js';
import RandomUtils from '../utils/random.js';

export default class CarModel {
  constructor(name) {
    this.name = name;
    this.position = INIT.POSITION;
  }

  move() {
    const randomNumber = RandomUtils.pickRandomNumber();
    if (randomNumber >= CAR.REFERENCE_POINT_FOR_MOVEMENT) {
      this.position += CAR.ONE_MOVE;
    }
  }
}
