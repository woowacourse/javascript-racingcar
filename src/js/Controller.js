import { LIMIT, MESSAGE, RANDOM_NUMBER, SELECTOR } from "./constants.js";
import CarModel from "./CarModel.js";
import ViewController from "./ViewController.js";
import {
  getRandomIntInclusive,
  isValidCarNames,
  isValidLapCount,
} from "./utils.js";

export class Controller {
  constructor() {
    this.carModels = [];
    this.viewController = new ViewController();

    this.carNameInput = document.querySelector(SELECTOR.CAR_NAME.INPUT);
    this.lapCountInput = document.querySelector(SELECTOR.LAP_COUNT.INPUT);

    this.setEventListener();
  }

  setEventListener() {
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
    const carNames = this.getCarName();

    if (!carNames) return;

    this.carModels = carNames.map((carName) => new CarModel(carName));

    this.viewController.renderCarNameTag(carNames);
  }

  handleLapCountButtonClick() {
    if (this.isInValidAccess()) {
      alert(MESSAGE.COMMON.INVALID_ACCESS);
      return;
    }
    const lapCount = this.getLapCount();

    if (!lapCount) return;

    this.startRace(lapCount);
  }

  handleRestartButtonClick() {
    this.carModels = [];
    this.carNameInput.value = "";
    this.lapCountInput.value = "";

    this.viewController.clear();
  }

  isInValidAccess() {
    return this.carModels.length === 0;
  }

  getCarName() {
    const carNames = this.carNameInput.value
      .split(",")
      .map((carName) => carName.trim())
      .filter((carName) => carName !== "");

    if (!isValidCarNames(carNames)) return;

    return carNames;
  }

  getLapCount() {
    const userInput = this.lapCountInput.value;

    if (!isValidLapCount(userInput)) {
      this.lapCountInput.value = "";
      return;
    }

    return Number(userInput);
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

    return this.carModels.filter(({ moveCount }) => moveCount === maxMoveCount);
  }

  startRace(lapCount) {
    let lap = 0;

    this.viewController.renderGameStart();

    const race = setInterval(() => {
      if (lap++ === lapCount) {
        this.endRace();
        clearInterval(race);
        return;
      }

      this.endLap(lap === lapCount);
    }, 1000);
  }

  endLap(isLastLap) {
    const lapResult = this.getLapResult();

    this.carModels
      .filter((_, i) => lapResult[i])
      .forEach((carModel) => carModel.move());
    this.viewController.renderGameProgress(lapResult, isLastLap);
  }

  endRace() {
    const winnersNames = this.getWinners().map(({ name }) => name);

    this.viewController.renderGameResult(winnersNames);
    setTimeout(() => {
      alert(winnersNames.join(", ") + MESSAGE.GAME_RESULT.CELEBRATION);
    }, 2000);
  }
}
