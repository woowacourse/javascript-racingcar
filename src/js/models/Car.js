import { CONSTANT_NUMBER } from '../constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randNumber = Math.random() * CONSTANT_NUMBER.RANDOM_RANGE;
    if (randNumber >= CONSTANT_NUMBER.FORWARDING_THRESHOLD) {
      this.position++;
    }
  }
}
