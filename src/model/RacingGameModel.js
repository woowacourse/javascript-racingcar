import { CAR } from '../constants/constants.js';
import CarModel from './CarModel.js';

export default class RacingGameModel {
  constructor() {
    this.cars = [];
    this.round = CAR.INITIAL_VALUE;
  }

  getCarsName() {
    return this.cars.map((car) => car.name);
  }

  moveCars() {
    this.cars.forEach((car) => {
      car.move();
    });
  }

  set players(names) {
    this.cars = names.map((name) => new CarModel(name));
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
    const maxRecord = this.cars.reduce(
      (accumulator, current) => Math.max(accumulator, current.position),
      CAR.INITIAL_VALUE
    );

    return maxRecord;
  }

  findWinners() {
    const maxRecord = this.findMaxRecord();

    const winnerList = this.cars.reduce((accumulator, current) => {
      if (current.position === maxRecord) {
        accumulator.push(current.name);
      }
      return accumulator;
    }, []);

    return winnerList;
  }
}
