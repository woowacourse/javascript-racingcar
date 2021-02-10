import { NUMBER } from '../constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randNumber = Math.random() * NUMBER.RANDOM_RANGE;
    if (randNumber >= NUMBER.FORWARDING_THRESHOLD) {
      this.position++;
    }
  }
}
