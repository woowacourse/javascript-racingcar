import RacingCarInstance from './RacingCarInstance.js';
import { isAdvance } from '../utils/RacingGame/validator.js';

export default class RacingGameModel {
  #state;
  #maxDistance;

  constructor() {
    this.init();
  }

  init() {
    this.#state = {
      carList: [],
      currentRound: 0,
      totalRound: 0,
      round: { total: 0, current: 0 },
      winners: [],
    };

    this.#maxDistance = Number.MIN_SAFE_INTEGER;
  }

  set carList(nameList) {
    this.#state.carList = nameList.map((name) => new RacingCarInstance(name));
  }

  get carList() {
    return this.#state.carList;
  }

  set round(number) {
    this.#state.totalRound = Number(number);
  }

  get round() {
    return this.#state.totalRound;
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

  #isGameOver() {
    return this.#state.currentRound === this.#state.totalRound;
  }

  play() {
    const { carList } = this.#state;
    carList.forEach((carInstance) => {
      if (isAdvance() === false) {
        return;
      }

      carInstance.go();
    });

    this.#state.currentRound += 1;
    return { isGameOver: this.#isGameOver(), carList };
  }
}
