import { CAR } from '../constants/constants.js';
import Car from './Car.js';

export default class RacingGame {
  constructor() {
    this.cars = [];
    this.round = CAR.INIT_POSITION;
  }

  moveCars() {
    this.cars.forEach((car) => {
      car.move();
    });
  }

  set players(names) {
    this.cars = names.map((name) => new Car(name));
  }

  goToNextTurn() {
    this.moveCars();
    this.round -= CAR.ROUND_PER_PROCESS;
  }

  get winners() {
    return this.findWinners();
  }

  reset() {
    this.cars = [];
    this.round = CAR.INIT_POSITION;
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
