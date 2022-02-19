import { INPUT_ERROR, RACINGGAME } from '../constants/constants.js';
import { isInRange } from '../utils/validation.js';
import Car from './Car.js';

export default class RacingGame {
  constructor() {
    this.cars = [];
    this.round = RACINGGAME.INIT_ROUND;
  }

  moveCars() {
    this.cars.forEach((car) => {
      car.move();
    });
  }

  get carNameList() {
    return this.cars.map((car) => car.name);
  }

  setRound(round) {
    if (!isInRange(round)) {
      throw new Error(INPUT_ERROR.COUNT_NOT_IN_RANGE);
    }
    this.round = round;
  }

  set players(names) {
    this.cars = names.map((name) => new Car(name));
  }

  goToNextTurn() {
    this.moveCars();
    this.round -= RACINGGAME.ROUND_PER_PROCESS;
  }

  get winners() {
    return this.findWinners();
  }

  reset() {
    this.cars = [];
    this.round = RACINGGAME.INIT_ROUND;
  }

  findMaxRecord() {
    return Math.max(...this.cars.map((car) => car.position));
  }

  findWinners() {
    return this.cars
      .filter((car) => car.position === this.findMaxRecord())
      .map((car) => car.name);
  }
}
