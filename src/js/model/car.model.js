import { MIN_CONDITION_OF_CAR_MOVE, RANDOM_RANGE } from '../constants.js';
import randomNumber from '../utils/random-number.js';

class CarModel {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  moveForward() {
    this.distance += 1;
  }

  tryMove() {
    const num = randomNumber(...RANDOM_RANGE);
    if (num >= MIN_CONDITION_OF_CAR_MOVE) {
      this.moveForward();
    }
  }

  resetDistance() {
    this.distance = 0;
  }
}

export default CarModel;
