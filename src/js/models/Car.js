import { GAME_LIMIT_VALUE } from '../constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randNumber = Math.random() * GAME_LIMIT_VALUE.RANDOM_RANGE;
    if (randNumber >= GAME_LIMIT_VALUE.FORWARDING_THRESHOLD) {
      this.position++;
    }
  }
}
