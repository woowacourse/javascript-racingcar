import { DELAY_TIME } from '../constants.js';
import { delay } from '../utils/utils.js';

export default class RacingCarGame {
  constructor(
    model,
    carNameInputView,
    racingCountInputView,
    racingProgressView,
    racingResultView
  ) {
    this.model = model;
    this.carNameInputView = carNameInputView;
    this.racingCountInputView = racingCountInputView;
    this.racingProgressView = racingProgressView;
    this.racingResultView = racingResultView;

    this.previousCarDistanceList = [];

    this.carNameInputView.bindClickCarNameButton(
      this.submitCarNames.bind(this)
    );
    this.racingCountInputView.bindClickRacingCountButton(
      this.submitRacingCount.bind(this)
    );
    this.racingResultView.bindClickRestartButton(this.init.bind(this));
  }

  submitCarNames() {
    const carNameList = this.carNameInputView.getUserCarNameInput();
    if (!this.carNameInputView.isValidateCarNameList(carNameList)) {
      return;
    }

    this.model.setCarList(carNameList);
    this.racingCountInputView.visibleSection();
    this.racingProgressView.renderCarList(this.model.carList);
    this.carNameInputView.disabledInputButton();
  }

  moveCars() {
    this.model.carList.forEach((car, index) => {
      car.race();

      if (this.previousCarDistanceList[index] >= car.distance) {
        return;
      }

      this.previousCarDistanceList[index] = car.distance;
      this.racingProgressView.renderProgressList(index);
    });
  }

  async startRace(racingCount) {
    this.previousCarDistanceList = Array(this.model.carList.length).fill(0);
    this.racingProgressView.renderSpinnerAnimation();

    for (let i = 0; i < racingCount; i += 1) {
      await delay(DELAY_TIME.RACING_PROGRESS);
      this.moveCars();
    }

    this.racingProgressView.removeSpinnerAnimation();
  }

  async submitRacingCount() {
    const racingCount = this.racingCountInputView.getUserRacingCountInput();

    if (!this.racingCountInputView.isValidRacingCount(racingCount)) {
      return;
    }

    this.racingCountInputView.disabledInputButton();
    await this.startRace(racingCount);
    this.racingResultView.renderWinners(this.model.winners);
  }

  init() {
    this.model.init();
    this.carNameInputView.init();
    this.racingCountInputView.init();
    this.racingProgressView.init();
    this.racingResultView.init();
  }
}
