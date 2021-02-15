import { getRandomNumber } from '../utils/index.js';

export default class RacingGame {
  constructor() {
    this.reset();
  }

  reset() {
    this.cars = [];
    this.count = 0;
    this.isEnd = false;
  }

  setCars(cars) {
    this.cars = cars;
  }

  getCars() {
    return this.cars;
  }

  setCount(count) {
    this.count = count;
  }

  getCount() {
    return this.count;
  }

  end() {
    this.isEnd = true;
  }

  runRound() {
    this.cars.forEach(car => {
      if (this.isMoving()) {
        car.moveForward();
        return;
      }

      car.finishLoading();
    });
  }

  isMoving() {
    const MOVE_TRIGGER = 4;
    return getRandomNumber() >= MOVE_TRIGGER;
  }

  finishProgress() {
    this.cars.forEach(car => car.finishLoading());
  }

  getWinners() {
    const maxDistance = this.getMaxDistance();
    return this.cars
      .filter(({ position }) => {
        return position === maxDistance;
      })
      .map(({ name }) => name);
  }

  getMaxDistance() {
    return Math.max(...this.cars.map(({ position }) => position));
  }
}
