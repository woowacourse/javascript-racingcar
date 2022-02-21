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

    this.bindingEventListener();
  }

  bindingEventListener() {
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

  async startRace(racingCount) {
    this.racingProgressView.renderSpinnerAnimation();

    await this.racingProgressView.renderRacingProgress(
      racingCount,
      this.model.carList
    );

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
