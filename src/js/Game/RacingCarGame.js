import { NUMBERS } from '../Constants/constants.js';
import Car from './Car.js';
import { getRandomInt } from '../utils.js';

export default class RacingCarGame {
  constructor(carNames, tryCount) {
    this.tryCount = tryCount;
    this.cars = this.createCars(carNames);
  }

  createCars(carNames) {
    return carNames.map((carName) => new Car(carName));
  }

  // 자동차 게임 한 턴을 진행한다.
  playGame() {
    this.cars.forEach((car) => {
      if (getRandomInt(NUMBERS.RANDOM_RANGE) >= NUMBERS.RUN_POINT) {
        car.run();
      }
    });
  }

  setTryCount(tryCount) {
    this.tryCount = tryCount;
  }

  getTryCount() {
    return this.tryCount;
  }

  getCars() {
    return this.cars;
  }

  // return (String)
  getWinners() {
    const maxPosition = this.cars
      .reduce((max, car) => Math.max(max, car.getPosition()), 0);
    return this.cars.filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName())
      .join(', ');
  }
}
