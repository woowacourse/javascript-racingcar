import { MESSAGE, RANDOM_NUMBER, SELECTOR } from "./constants.js";
import CarModel from "./CarModel.js";
import ViewController from "./ViewController.js";
import { getRandomIntInclusive } from "./utils.js";

export class Controller {
  constructor() {
    this.carModels = [];
    this.viewController = new ViewController();

    this.carNameInput = document.querySelector(SELECTOR.CAR_NAME.INPUT);
    this.lapCountInput = document.querySelector(SELECTOR.LAP_COUNT.INPUT);

    const carNameButton = document.querySelector(SELECTOR.CAR_NAME.BUTTON);
    carNameButton.addEventListener("click", () =>
      this.handleCarNameButtonClick()
    );

    const lapCountButton = document.querySelector(SELECTOR.LAP_COUNT.BUTTON);
    lapCountButton.addEventListener("click", () =>
      this.handleLapCountButtonClick()
    );

    const restartButton = document.querySelector(SELECTOR.GAME_RESULT.BUTTON);
    restartButton.addEventListener("click", () =>
      this.handleRestartButtonClick()
    );
  }

  handleCarNameButtonClick() {
    const carNames = this.carNameInput.value
      .split(",")
      .map((carName) => carName.trim())
      .filter((carName) => carName !== "");

    if (carNames.length < 2) {
      alert(MESSAGE.CAR_NAME.MIN_NUMBER);
      return;
    }

    if (carNames.some((carName) => carName.length > 5)) {
      alert(MESSAGE.CAR_NAME.MAX_LENGTH);
      return;
    }

    if (carNames.some((carName, i) => i !== carNames.lastIndexOf(carName))) {
      alert(MESSAGE.CAR_NAME.DUPLICATION);
      return;
    }

    this.carModels = carNames.map((carName) => new CarModel(carName));

    // TODO: input하면 중복 생성되지 않게하기
    this.viewController.renderCarNameTag(carNames);
  }

  handleLapCountButtonClick() {
    const userInput = this.lapCountInput.value;

    // TODO: try-catch 형식으로 리팩토링하자!
    if (this.carModels.length === 0) {
      alert(MESSAGE.COMMON.INVALID_ACCESS);
      return;
    }

    if (userInput === "") {
      alert(MESSAGE.LAP_COUNT.NOT_A_NUMBER);
      this.lapCountInput.value = "";
      return;
    }

    const lapCount = Number(userInput);

    if (lapCount < 1) {
      alert(MESSAGE.LAP_COUNT.OUT_OF_RANGE);
      this.lapCountInput.value = "";
      return;
    }

    if (lapCount > 20) {
      alert(MESSAGE.LAP_COUNT.OUT_OF_RANGE);
      this.lapCountInput.value = "";
      return;
    }

    if (!Number.isInteger(lapCount)) {
      alert(MESSAGE.LAP_COUNT.OUT_OF_RANGE);
      this.lapCountInput.value = "";
      return;
    }

    for (let i = 0; i < lapCount; i++) {
      const lapResult = this.getLapResult();
      this.carModels
        .filter((_, i) => lapResult[i])
        .forEach((carModel) => carModel.move());
      this.viewController.renderGameProgress(lapResult);
    }

    const winners = this.getWinners();
    this.viewController.renderGameResult(winners);
  }

  handleRestartButtonClick() {
    this.carModels = [];
    this.carNameInput.value = "";
    this.lapCountInput.value = "";

    this.viewController.clear();
  }

  getLapResult() {
    const lapResult = [];

    for (let i = 0; i < this.carModels.length; i++) {
      const {
        RANGE: { MIN, MAX },
        MOVING_POINT,
      } = RANDOM_NUMBER;
      const randomNumber = getRandomIntInclusive(MIN, MAX);
      lapResult[i] = randomNumber >= MOVING_POINT;
    }

    return lapResult;
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
