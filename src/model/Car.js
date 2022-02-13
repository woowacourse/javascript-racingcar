import { NUMBER } from '../util/constants.js';

function canGo() {
  return Math.floor(Math.random() * 10) >= NUMBER.CAN_GO;
}

export default class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  go() {
    if (canGo()) {
      this.position += 1;
    }
  }
}
