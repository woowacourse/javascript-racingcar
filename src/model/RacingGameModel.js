import { INIT } from '../constants/constants.js';
import CarModel from './CarModel.js';

export default class RacingGameModel {
  constructor() {
    this._cars = INIT.CARS;
    this._round = INIT.ROUND;
  }

  moveCars(moves) {
    this._cars = this._cars.map((car, index) => {
      return { ...car, position: car.position + moves[index] };
    });
  }

  set cars(names) {
    this._cars = names.map((name) => new CarModel(name));
  }

  get cars() {
    return this._cars;
  }

  set round(newRound) {
    this._round = newRound;
  }

  get round() {
    return this._round;
  }

  get winners() {
    return this.findWinners();
  }

  reset() {
    this._cars = INIT.CARS;
    this._round = INIT.ROUND;
  }

  findMaxRecord() {
    const maxRecord = this._cars.reduce(
      (accumulator, current) => Math.max(accumulator, current.position),
      INIT.RECORD
    );

    return maxRecord;
  }

  findWinners() {
    const maxRecord = this.findMaxRecord();

    const winnerList = this._cars.reduce((accumulator, current) => {
      if (current.position === maxRecord) {
        accumulator.push(current.name);
      }
      return accumulator;
    }, []);

    return winnerList;
  }
}
