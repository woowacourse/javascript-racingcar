import RacingCar from './RacingCar.js';
import { getRandomNumber } from '../utils/index.js';
import { MOVE_TRIGGER } from '../constants/index.js';

export default class RacingGame {
  constructor(names, count) {
    this.cars = [];
    this.setCars(names);
    this.runRace(count);
  }

  setCars(names) {
    this.cars = names.map(name => new RacingCar(name));
  }

  runRace(count) {
    for (let i = 0; i < count; i++) {
      this.runRound();
    }
  }

  runRound() {
    this.cars.forEach(car => this.followRule() && car.moveForward());
  }

  followRule() {
    return getRandomNumber() >= MOVE_TRIGGER;
  }

  getWinners() {
    const winners = [];
    const maxDistance = this.getMaxDistance();

    this.cars.forEach(car => {
      car.position === maxDistance && winners.push(car.name);
    });

    return winners;
  }

  getMaxDistance() {
    return this.cars.reduce((maxDistance, { position }) => {
      return Math.max(maxDistance, position);
    }, 0);
  }
}
