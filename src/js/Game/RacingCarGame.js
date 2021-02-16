import { NUMBERS } from '../Utils/constants.js';

export default class RacingCarGame {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
    this.playGame();
  }

  getRandomInt() {
    return Math.floor(Math.random() * (NUMBERS.RANDOM_RANGE + 1));
  }

  playOneRound() {
    this.cars.forEach((car) => {
      if (this.getRandomInt() >= NUMBERS.RUN_POINT) {
        car.run();
      }
    });
  }

  playGame() {
    for (let i = 0; i < this.tryCount; i++) {
      this.playOneRound();
    }
  }

  getCars() {
    return this.cars;
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
