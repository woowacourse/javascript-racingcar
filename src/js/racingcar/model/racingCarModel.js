import {GAME} from '../../constants/constant.js';
import {generateRandomNumber} from '../../utils/random.js';

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

  getWinners() {
    const maxForward = Math.max(...this.cars.map((car) => car.forward));

    return this.cars
      .filter((car) => car.forward === maxForward)
      .map((car) => car.name);
  }

  playRacingCarGame() {
    for (let i = 0; i < this.count; i++) {
      this.playRacingCarGameOnce();
    }
  }

  playRacingCarGameOnce() {
    this.cars.forEach((car) => {
      generateRandomNumber(0, 9) >= GAME.FORWARD_STANDARD_NUM &&
        car.moveForward();
    });
  }
}

export default RacingCarModel;
