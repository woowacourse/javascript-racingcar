import { RacingCarInstance } from './index.js';
import isAdvance from '../utils/isAdvance.js';

export default class RacingGame {
  constructor() {
    this.init();
  }

  init() {
    this._state = {
      carList: [],
      round: 0,
      winners: [],
    };
  }

  carListPush(array) {
    array.forEach((carName) => {
      const newCar = new RacingCarInstance(carName);
      this._state.carList.push(newCar);
    });
  }

  get carList() {
    return this._state.carList;
  }

  set round(number) {
    this._state.round = number;
  }

  get round() {
    return this._state.round;
  }

  get winner() {
    let maxDistance = Number.MIN_SAFE_INTEGER;
    this.carList.forEach((item) => {
      if (item.distance < maxDistance) {
        return false;
      }

      if (item.distance > maxDistance) {
        maxDistance = item.distance;
        this._state.winners.length = 0;
      }

      this._state.winner.push(item);
    });

    return this._state.winner;
  }

  play() {
    const { carList } = this._state;

    carList.forEach((car) => {
      if (isAdvance() === true) {
        return true;
      }

      car.go();
    });

    return this._state.carList;
  }
}
