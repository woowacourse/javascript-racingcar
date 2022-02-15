import RacingCarInstance from './RacingCarInstance.js';
import isAdvance from '../utils/isAdvance.js';

export default class RacingGameModel {
  constructor() {
    this.init();
  }

  init() {
    this._state = {
      carList: [],
      round: 0,
      winners: [],
    };

    this._maxDistance = Number.MIN_SAFE_INTEGER;
  }

  get carList() {
    return this._state.carList;
  }

  set carList(nameList) {
    this._state.carList = nameList.map((name) => new RacingCarInstance(name));
  }

  set round(number) {
    this._state.round = number;
  }

  get round() {
    return this._state.round;
  }

  _isWinner(carInstance) {
    const { distance } = carInstance;
    const { winners } = this._state;

    if (distance < this._maxDistance) {
      return false;
    }

    if (distance > this._maxDistance) {
      this._maxDistance = distance;
      winners.length = 0;
    }

    return true;
  }

  get winners() {
    const { winners, carList } = this._state;
    carList.forEach((carInstance) => {
      if (this._isWinner(carInstance) === false) {
        return;
      }

      winners.push(carInstance);
    });

    return winners;
  }

  play() {
    const { carList } = this._state;

    carList.forEach((carInstance) => {
      if (isAdvance() === false) {
        return;
      }

      carInstance.go();
    });

    return carList;
  }
}
