import { generateRandomNumber } from '../utils/index.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.racingCount = 0;
  }

  move() {
    if (generateRandomNumber() < 4) {
      return false;
    }
    this.racingCount += 1;
    return true;
  }
}
