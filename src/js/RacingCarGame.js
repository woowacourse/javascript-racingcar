import { NUMBERS } from './constants.js';

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
    this.cars = this.cars.map((car) => {
      if (this.getRandomInt() >= NUMBERS.RUN_POINT) {
        car.run();
      }
    });
  }

  playGame(tryCount) {
    for (let i = 0; i < tryCount; i++) {
      this.playOneRound();
    }
  }

  getCars() {
    return this.cars;
  }

  // return (String)
  getWinners() {
    const maxPosition = this.cars.reduce((max, car) => Math.max(max, car.distance), 0);
    return this.cars.filter((car) => car.distance === maxPosition).map((car) => car.name).join(', ');
  }
}
