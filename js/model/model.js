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
    this.carPosition = new Array(this.carNames.length).fill(0);
  }

  saveRacingCount(racingCount) {
    this.racingCount = racingCount;
  }
}
