import { CLASS, ERROR_MESSAGES, ID, RULES } from './constants/index.js';
import {
  convertToNumber,
  generateRandomNumber,
  isNotNaturalNumber,
  waitGame,
  handleError,
} from './util/index.js';
import Car from './model/Car.js';
import RacingCarGameView from './view/RacingCarGameView.js';

class RacingCarGame {
  constructor() {
    this.view = new RacingCarGameView();
    this.setEventHandler();
    this.racingCarList = [];
    this.racingCount = 0;
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

    const carNamesArray = carNames.split(RULES.CAR_NAME_SEPERATOR).map((carName) => carName.trim());

    this.racingCarList = carNamesArray.map((carName) => new Car(carName));
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
    this.racingCount = racingCountNumber;
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
    this.resetGameStatus();
    this.view.resetElements();
    this.view.hideElements();
  }

  resetGameStatus() {
    this.racingCarList = [];
    this.racingCount = 0;
  }

  play() {
    this.view.renderRacingCarList(this.racingCarList);
    this.startRacingGame();
  }

  async startRacingGame() {
    for (let i = 0; i < this.racingCount; i++) {
      this.runOneCycleGame();
      await waitGame(RULES.WAITING_TIME);
    }

    this.handleGameResult();
    this.view.showRestartSection();
  }

  runOneCycleGame() {
    this.racingCarList.forEach((car, index) => {
      const randomNumber = generateRandomNumber();

      if (randomNumber >= RULES.MOVE_CONDITION_NUMBER) {
        car.moveForward();
        this.view.renderRacingCarProgress(index);
      }
    });
  }

  handleGameResult() {
    const finalWinner = this.getFinalWinner();
    this.view.renderFinalWinner(finalWinner);
  }

  getFinalWinner() {
    const maxDistance = this.getMaxDistance(this.racingCarList);
    const winnerList = this.getWinnerList(this.racingCarList, maxDistance);
    return winnerList.join(RULES.WINNER_LIST_SEPERATOR);
  }

  getMaxDistance(racingCarList) {
    const distance = racingCarList.map((car) => car.getDistance());
    const maxDistance = Math.max(...distance);

    return maxDistance;
  }

  getWinnerList(racingCarList, maxDistance) {
    return racingCarList
      .filter((car) => car.getDistance() === maxDistance)
      .map((car) => car.getName());
  }
}

new RacingCarGame();
