import { NUMBER_FOR_MOVE } from './utils/constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
  }

  #generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(
      NUMBER_FOR_MOVE.MIN_NUMBER,
      NUMBER_FOR_MOVE.MAX_NUMBER,
    );
  }

  randomMove() {
    const number = this.#generateRandomNumber();
    if (number >= NUMBER_FOR_MOVE.MOVE_CRITERIA) {
      this.step += 1;
    }
  }
}
