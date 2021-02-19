import { NUMBERS } from '../Constants/constants.js';

export default class RacingCarGame {
  constructor(cars, tryCount) {
    this.cars = cars;
    this.tryCount = tryCount;
  }

  getRandomInt() {
    return Math.floor(Math.random() * (NUMBERS.RANDOM_RANGE + 1));
  }

  playOneRound() {
    console.log("RACING!")
    this.cars.forEach((car) => {
      if (this.getRandomInt() >= NUMBERS.RUN_POINT) {
        car.run();
      }
    });
  }

  // playGame() {

  // }

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
