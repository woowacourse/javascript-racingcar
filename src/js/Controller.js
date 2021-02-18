import { MESSAGE, SELECTOR, CONSTANT } from "./constants.js";
import CarModel from "./CarModel.js";
import ViewController from "./ViewController.js";
import { $, getLapResult, splitCarName, sleep } from "./utils.js";

export class Controller {
  constructor() {
    this.carModels = [];
    this.viewController = new ViewController();

    this.getHTMLElements();
    this.addEventListeners();
  }

  getHTMLElements() {
    this.$carNameInput = $(SELECTOR.CAR_NAME.INPUT);
    this.$lapCountInput = $(SELECTOR.LAP_COUNT.INPUT);

    this.$carNameButton = $(SELECTOR.CAR_NAME.BUTTON);
    this.$lapCountButton = $(SELECTOR.LAP_COUNT.BUTTON);
    this.$restartButton = $(SELECTOR.GAME_RESULT.BUTTON);
  }

  addEventListeners() {
    this.$carNameButton.addEventListener("click", () =>
      this.handleCarNameButtonClick()
    );

    this.$lapCountButton.addEventListener("click", () =>
      this.handleLapCountButtonClick()
    );

    this.$restartButton.addEventListener("click", () =>
      this.handleRestartButtonClick()
    );
  }

  handleCarNameButtonClick() {
    try {
      const carNames = splitCarName(this.$carNameInput.value);
      const {
        CAR_NAME: { MIN_NUMBER, MAX_LENGTH },
      } = CONSTANT;

      if (carNames.length < MIN_NUMBER)
        throw Error(MESSAGE.CAR_NAME.MIN_NUMBER);

      if (carNames.some((carName) => carName.length > MAX_LENGTH))
        throw Error(MESSAGE.CAR_NAME.MAX_LENGTH);

      if (carNames.some((carName, i) => i !== carNames.lastIndexOf(carName)))
        throw Error(MESSAGE.CAR_NAME.DUPLICATION);

      this.carModels = carNames.map((carName) => new CarModel(carName));
      this.viewController.renderCarNameTag(carNames);
    } catch (error) {
      alert(error.message);
    }
  }

  async handleLapCountButtonClick() {
    try {
      if (this.carModels.length === 0)
        throw Error(MESSAGE.COMMON.INVALID_ACCESS);

      if (this.$lapCountInput.value === "")
        throw Error(MESSAGE.LAP_COUNT.NOT_A_NUMBER);

      const lapCount = Number(this.$lapCountInput.value);
      const {
        LAP_COUNT: { MIN, MAX },
      } = CONSTANT;
      if (lapCount < MIN || lapCount > MAX || !Number.isInteger(lapCount))
        throw Error(MESSAGE.LAP_COUNT.OUT_OF_RANGE);

      this.viewController.readyGameProgress();
      for (let i = 0; i < lapCount; i++) {
        await sleep(CONSTANT.DELAY.ONE_LAP_PROGRESS);

        const lapResult = getLapResult(this.carModels.length);
        this.moveCarAlongWith(lapResult);
        this.viewController.renderGameProgress(lapResult);
      }
      this.viewController.stopGameProgress();

      const winners = this.getWinners();
      this.viewController.renderGameResult(winners);
    } catch (error) {
      alert(error.message);
      this.$lapCountInput.value = "";
    }
  }

  handleRestartButtonClick() {
    this.carModels = [];
    this.$carNameInput.value = "";
    this.$lapCountInput.value = "";

    this.viewController.clear();
  }

  moveCarAlongWith(lapResult) {
    lapResult.forEach(
      (isMoving, index) => isMoving && this.carModels[index].move()
    );
  }

  getWinners() {
    const maxMoveCount = Math.max(
      ...this.carModels.map(({ moveCount }) => moveCount)
    );

    return this.carModels
      .filter(({ moveCount }) => moveCount === maxMoveCount)
      .map(({ name }) => name);
  }
}
