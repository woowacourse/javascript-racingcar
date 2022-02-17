import { RULES } from './constants/index.js';
import { convertToNumber, generateRandomNumber, waitGame } from './util/index.js';
import RacingCarGameModel from './model/RacingCarGameModel.js';
import RacingCarGameView from './view/RacingCarGameView.js';
import validator from './validator/index.js';

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
    try {
      const carNameList = carNames.split(RULES.CAR_NAME_SEPERATOR).map((carName) => carName.trim());

      validator.checkVCarNames(carNameList);

      this.model.setRacingCarList(carNameList);
      this.view.showRacingCountForm();
    } catch (error) {
      alert(error.message);
    }
  }

  handleRacingCountFormSubmitEvent(racingCount) {
    try {
      validator.checkRacingCount(racingCount);

      const racingCountNumber = convertToNumber(racingCount);
      this.model.racingCount = racingCountNumber;
      this.play();
    } catch (error) {
      alert(error.message);
    }
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

      if (i === 0) {
        this.view.renderSpinner();
      }

      await waitGame(RULES.WAITING_TIME);
    }

    this.view.removeSpinner();
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
