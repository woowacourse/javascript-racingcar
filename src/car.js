import { NUMBER } from './utils/constants.js';

export default class Car {
  constructor(name) {
    this.name = name;
    this.step = NUMBER.INITIAL_STEP;
  }

  #generateRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(NUMBER.RANGE_START, NUMBER.RANGE_END);
  }

  randomMove() {
    const number = this.#generateRandomNumber();
    if (number >= NUMBER.STEP_BASE_NUMBER) {
      this.step += NUMBER.STEP;
    }
  }

  resetStep() {
    this.step = NUMBER.INITIAL_STEP;
  }
}
