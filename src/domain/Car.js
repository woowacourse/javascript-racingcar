import DEFINITION from '../constants/Definition.js';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  moveForward(randomValue) {
    if (randomValue < DEFINITION.MOVE_CONDITION) {
      return;
    }
    this.position++;
  }
}

export default Car;
