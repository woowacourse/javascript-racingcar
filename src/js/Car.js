import { CAR } from './constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = CAR.INIT_DISTANCE;
  }

  move() {
    this.distance += CAR.STEP;
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  race() {
    const randomNumber = this.getRandomNumber(
      CAR.RANDOM_NUMBER_RANGE.MIN,
      CAR.RANDOM_NUMBER_RANGE.MAX
    );

    if (randomNumber >= CAR.MOVE_FORWARD_THRESHOLD) {
      this.move();
    }
  }

  initDistance() {
    this.distance = CAR.INIT_DISTANCE;
  }
}
