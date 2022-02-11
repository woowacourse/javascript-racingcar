import { CAR } from '../constants/constants.js';
import Car from './Car.js';

export default class RacingGame {
  constructor() {
    this.cars = [];
    this.round = CAR.ZERO_NUMBER;
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
    this.round -= CAR.ONE_NUMBER;
  }

  get winners() {
    return this.findWinners();
  }

  reset() {
    this.cars = [];
    this.round = CAR.ZERO_NUMBER;
  }

  findMaxRecord() {
    let maxRecord = CAR.ZERO_NUMBER;

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
