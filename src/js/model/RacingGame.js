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

  runGame() {
    this.runRace();
    this.isEnd = true;
  }

  runRace() {
    for (let i = 0; i < this.count; i++) {
      this.runRound();
    }
  }

  runRound() {
    this.cars.forEach(car => this.followRule() && car.moveForward());
  }

  followRule() {
    const MOVE_TRIGGER = 4;
    return getRandomNumber() >= MOVE_TRIGGER;
  }

  getWinners() {
    const maxDistance = this.getMaxDistance();
    return this.cars
      .filter(({ position }) => {
        position === maxDistance;
      })
      .map(({ name }) => name);
  }

  getMaxDistance() {
    return Math.max(this.cars.map(({ position }) => position));
  }
}
