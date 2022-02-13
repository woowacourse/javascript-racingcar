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

  get carList() {
    return this._state.carList;
  }

  set carList(array) {
    const { carList } = this._state;
    carList.length = 0;

    array.forEach((carName) => {
      const newCar = new RacingCarInstance(carName);
      carList.push(newCar);
    });
  }

  set round(number) {
    this._state.round = number;
  }

  get round() {
    return this._state.round;
  }

  get winner() {
    const { winners, carList } = this._state;
    let maxDistance = Number.MIN_SAFE_INTEGER;

    carList.forEach((carInstance) => {
      if (carInstance.distance < maxDistance) {
        return false;
      }

      if (carInstance.distance > maxDistance) {
        maxDistance = carInstance.distance;
        winners.length = 0;
      }

      winners.push(carInstance);
    });

    return winners;
  }

  play() {
    const { carList } = this._state;

    carList.forEach((carInstance) => {
      if (isAdvance() === true) {
        return true;
      }

      carInstance.go();
    });

    return carList;
  }
}
