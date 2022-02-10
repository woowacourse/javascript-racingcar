import { NUMBER } from '../util/constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  go() {
    if (Math.floor(Math.random() * 10) >= NUMBER.CAN_GO) {
      this.position += 1;
    }
  }
}
