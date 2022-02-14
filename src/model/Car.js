import { CAN_GO_COUNT } from '../utils/constants.js';

class Car {
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

export default Car;
