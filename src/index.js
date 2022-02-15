import { ERROR_MESSAGES, RULES } from './constants/index.js';
import {
  convertToNumber,
  generateRandomNumber,
  isNotNaturalNumber,
  waitGame,
  handleError,
} from './util/index.js';
import RacingCarGameModel from './model/RacingCarGameModel.js';
import Car from './model/Car.js';
import RacingCarGameView from './view/RacingCarGameView.js';

class RacingCarGame {
  constructor() {
    this.view = new RacingCarGameView();
    this.model = new RacingCarGameModel();

    this.setEventHandler();
  }

  setEventHandler() {
    this.view.setCarNameFormEventHandler(this.handleCarNameFormSubmitEvent.bind(this));
    this.view.setRacingCountFormEventHandler(this.handleRacingCountFormSubmitEvent.bind(this));
    this.view.setRestartBtnEventHandler(this.handleRestartBtnClickEvent.bind(this));
  }

  handleCarNameFormSubmitEvent(carNames) {
    if (this.isNotValidCarNames(carNames)) {
      return;
    }

    const carNameList = carNames.split(RULES.CAR_NAME_SEPERATOR).map((carName) => carName.trim());

    this.model.setRacingCarList(carNameList);
    this.view.showRacingCountForm();
  }

  isNotValidCarNames(carNames) {
    if (carNames === RULES.EMPTY_STRING) {
      handleError(ERROR_MESSAGES.EMPTY_CAR_NAME);
      return true;
    }

    const carNamesArray = carNames.split(RULES.CAR_NAME_SEPERATOR).map((carName) => carName.trim());

    if (carNamesArray.some((carName) => carName.length > RULES.MAX_CAR_NAME_LENGTH)) {
      handleError(ERROR_MESSAGES.EXCEED_CAR_NAME_LENGTH);
      return true;
    }

    if (carNamesArray.some((carName) => carName.length === RULES.ZERO_CAR_NAME_LENGTH)) {
      handleError(ERROR_MESSAGES.BLANK_CAR_NAME);
      return true;
    }

    return false;
  }

  handleRacingCountFormSubmitEvent(racingCount) {
    if (this.isNotValidRacingCount(racingCount)) {
      return;
    }

    const racingCountNumber = convertToNumber(racingCount);
    this.model.racingCount = racingCountNumber;
    this.play();
  }

  isNotValidRacingCount(racingCount) {
    if (racingCount === RULES.EMPTY_STRING) {
      handleError(ERROR_MESSAGES.BLANK_RACING_COUNT);
      return true;
    }

    const racingCountNumber = convertToNumber(racingCount);

    if (typeof racingCountNumber !== 'number') {
      handleError(ERROR_MESSAGES.NOT_NUMBER_TYPE);
      return true;
    }

    if (isNotNaturalNumber(racingCountNumber)) {
      handleError(ERROR_MESSAGES.NOT_NATURAL_NUMBER);
      return true;
    }

    return false;
  }

  handleRestartBtnClickEvent() {
    this.model.resetGameState();
    this.view.resetElements();
    this.view.hideElements();
  }

  play() {
    this.view.renderRacingCarList(this.model.racingCarList);
    this.startRacingGame();
  }

  async startRacingGame() {
    for (let i = 0; i < this.model.racingCount; i++) {
      this.runOneCycleGame();
      await waitGame(RULES.WAITING_TIME);
    }

    this.handleGameResult();
  }

  runOneCycleGame() {
    this.model.racingCarList.forEach((car, index) => {
      const randomNumber = generateRandomNumber();

      if (randomNumber >= RULES.MOVE_CONDITION_NUMBER) {
        car.moveForward();
        this.view.renderRacingCarProgress(index);
      }
    });
  }

  handleGameResult() {
    const finalWinner = this.model.getFinalWinner();
    this.view.renderFinalWinner(finalWinner);
    this.view.showRestartSection();
  }
}

new RacingCarGame();
