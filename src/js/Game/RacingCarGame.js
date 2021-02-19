import { NUMBERS } from '../Constants/constants.js';

export default class RacingCarGame {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
  }

  getRandomInt() {
    return Math.floor(Math.random() * (NUMBERS.RANDOM_RANGE + 1));
  }

  // 자동차 게임 한 턴을 진행한다.
  playGame() {
    this.cars.forEach((car) => {
      if (this.getRandomInt() >= NUMBERS.RUN_POINT) {
        car.run();
      }
    });
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
