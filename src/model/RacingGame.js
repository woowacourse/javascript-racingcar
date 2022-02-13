import { CAR } from '../constants/constants.js';
import Car from './Car.js';

export default class RacingGame {
  constructor() {
    this.cars = [];
    this.round = CAR.INITIAL_VALUE;
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
    this.round -= CAR.ONE_MOVE;
  }

  get winners() {
    return this.findWinners();
  }

  reset() {
    this.cars = [];
    this.round = CAR.INITIAL_VALUE;
  }

  findMaxRecord() {
    let maxRecord = CAR.INITIAL_VALUE;

    this.cars.forEach((car) => {
      if (car.position > maxRecord) {
        maxRecord = car.position;
      }
    });

    return maxRecord;
  }

  findWinners() {
    const winnerList = [];
    const maxRecord = this.findMaxRecord();

    this.cars.forEach((car) => {
      if (car.position === maxRecord) {
        winnerList.push(car.name);
      }
    });

    return winnerList;
  }
}
