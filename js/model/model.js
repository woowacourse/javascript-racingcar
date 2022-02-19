import { NUMBER } from '../utils/constants.js';

export default class Model {
  constructor() {
    this.carNames;
    this.carPosition;
    this.racingCount;
  }

  saveCars(carNames) {
    this.carNames = [...carNames];
  }

  initCarPosition() {
    this.carPosition = new Array(this.carNames.length).fill(NUMBER.ZERO);
  }

  saveRacingCount(racingCount) {
    this.racingCount = racingCount;
  }

  goForward(idx) {
    this.carPosition[idx]++;
  }
}
