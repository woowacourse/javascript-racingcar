import {GAME} from '../constants/constant.js';
import {generateRandomNumber} from '../utils/util.js';

class RacingCarModel {
  constructor(cars, count) {
    this.cars = cars;
    this.count = count;
  }

  getCars() {
    return this.cars;
  }

  getCount() {
    return this.count;
  }

  playOnce() {
    this.cars.forEach((car) => {
      generateRandomNumber(0, 9) >= GAME.FORWARD_STANDARD_NUM &&
        car.moveForward();
    });
  }
}

export default RacingCarModel;
