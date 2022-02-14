import { CAR } from '../constants/constants.js';
import RandomUtils from '../utils/random.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = CAR.INIT_POSITION;
  }

  move() {
    const randomNumber = RandomUtils.pickRandomNumber();
    if (randomNumber >= CAR.MOVE_NUMBER) {
      this.position += CAR.CAR_MOVE_DISTANCE_PER_PROCESS;
    }
  }
}
