import { DEFAULT_POSITION } from '../constants/index.js';

export default class RacingCar {
  constructor(name) {
    this.name = name;
    this.position = DEFAULT_POSITION;
  }

  moveForward() {
    this.position++;
  }
}
