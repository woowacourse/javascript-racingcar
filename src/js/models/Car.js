import { GAME_LIMIT_VALUE } from '../constants.js';

export default class Car {
  constructor(name) {
    this._name = name;
    this._position = 0;
  }

  get name() {
    return this._name;
  }

  get position() {
    return this._position;
  }

  move() {
    const randNumber = Math.random() * GAME_LIMIT_VALUE.RANDOM_RANGE;
    if (randNumber >= GAME_LIMIT_VALUE.FORWARDING_THRESHOLD) {
      this._position++;
    }
  }
}
