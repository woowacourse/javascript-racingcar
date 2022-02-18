import { INIT } from '../constants/constants.js';
import CarModel from './CarModel.js';

export default class RacingGameModel {
  #cars = INIT.CARS;

  #round = INIT.ROUND;

  moveCars(moves) {
    this.#cars = this.#cars.map((car, index) => {
      return { ...car, position: car.position + moves[index] };
    });
  }

  set cars(names) {
    this.#cars = names.map((name) => new CarModel(name));
  }

  get cars() {
    return this.#cars;
  }

  set round(newRound) {
    this.#round = newRound;
  }

  get round() {
    return this.#round;
  }

  get winners() {
    return this.findWinners();
  }

  reset() {
    this.#cars = INIT.CARS;
    this.#round = INIT.ROUND;
  }

  findMaxRecord() {
    const maxRecord = this.#cars.reduce(
      (accumulator, current) => Math.max(accumulator, current.position),
      INIT.RECORD
    );

    return maxRecord;
  }

  findWinners() {
    const maxRecord = this.findMaxRecord();

    const winnerList = this.#cars.reduce((accumulator, current) => {
      if (current.position === maxRecord) {
        accumulator.push(current.name);
      }
      return accumulator;
    }, []);

    return winnerList;
  }
}
