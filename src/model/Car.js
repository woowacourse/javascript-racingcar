import { CAN_GO_COUNT } from '../util/constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  go() {
    if (Math.floor(Math.random() * 10) >= CAN_GO_COUNT) {
      this.position += 1;
    }
  }
}
