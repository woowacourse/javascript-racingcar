import RacingCarInstance from './RacingCarInstance.js';
import isAdvance from '../utils/RacingGame/isAdvance.js';

export default class RacingGameModel {
  #state;
  #maxDistance;

  constructor() {
    this.init();
  }

  init() {
    this.#state = {
      carList: [],
      round: 0,
      winners: [],
    };

    this.#maxDistance = Number.MIN_SAFE_INTEGER;
  }

  get carList() {
    return this.#state.carList;
  }

  set carList(nameList) {
    this.#state.carList = nameList.map((name) => new RacingCarInstance(name));
  }

  set round(number) {
    this.#state.round = Number(number);
  }

  get round() {
    return this.#state.round;
  }

  #isWinner(carInstance) {
    const { distance } = carInstance;
    const { winners } = this.#state;

    if (distance < this.#maxDistance) {
      return false;
    }

    if (distance > this.#maxDistance) {
      this.#maxDistance = distance;
      winners.length = 0;
    }

    return true;
  }

  get winners() {
    const { winners, carList } = this.#state;
    carList.forEach((carInstance) => {
      if (this.#isWinner(carInstance) === false) {
        return;
      }

      winners.push(carInstance);
    });

    return winners;
  }

  play() {
    const { carList } = this.#state;

    carList.forEach((carInstance) => {
      if (isAdvance() === false) {
        return;
      }

      carInstance.go();
    });

    return carList;
  }
}
