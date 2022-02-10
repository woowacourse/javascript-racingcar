import { CAR } from '../constants/constants.js';
import { pickRandomNumber } from '../utils/index.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomNumber = pickRandomNumber();
    if (randomNumber >= CAR.MOVE_NUMBER) {
      this.position += 1;
    }
  }
}
