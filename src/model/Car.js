import { CAN_GO_COUNT, MAX_RANDOM_NUMBER } from '../utils/constants.js';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  go() {
    if (Math.floor(Math.random() * MAX_RANDOM_NUMBER) >= CAN_GO_COUNT) {
      this.position += 1;
    }
  }
}

export default Car;
