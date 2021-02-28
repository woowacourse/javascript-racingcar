import { NUMBERS } from '../Utils/constants.js';
import { getRandomInt } from '../Utils/utils.js';
import Car from './Car.js';

export default class RacingCarGame {
  constructor(carNames, tryCount) {
    this.cars = carNames.map((carName) => new Car(carName));
    this.tryCount = tryCount;
  }

  playOneRound() {
    this.cars.forEach((car) => {
      if (getRandomInt(NUMBERS.RANDOM_RANGE) >= NUMBERS.RUN_POINT) {
        car.run();
      }
    });
  }

  runGame() {
    this.playOneRound();
    this.tryCount--;
  }

  getCars() {
    return this.cars;
  }

  getTryCount() {
    return this.tryCount;
  }

  getMaxDistance() {
    return Math.max(...this.cars.map((car) => car.getPosition()));
  }

  // return (String)
  getWinners() {
    return this.cars
      .filter((car) => car.getPosition() === this.getMaxDistance())
      .map((car) => car.getName())
      .join(', ');
  }
}
