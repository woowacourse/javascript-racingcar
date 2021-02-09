import RacingCar from './RacingCar.js';
import { getRandomNumber } from '../utils/index.js';
import { MOVE_TRIGGER } from '../constants/index.js';

export default class RacingGame {
  constructor(names, count) {
    this.cars = [];
    this.winners = [];
    this.setCars(names);
    this.runRace(count);
    this.getWinner();
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

  getWinner() {
    const maxDistance = this.getMaxDistance();
    this.cars.forEach(car => {
      car.position === maxDistance && this.winners.push(car.name);
    });
  }

  getMaxDistance() {
    let maxDistance = 0;
    this.cars.forEach(car => {
      maxDistance = Math.max(maxDistance, car.position);
    });

    return maxDistance;
  }
}
