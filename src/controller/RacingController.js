import RacingGameModel from '../model/RacingGameModel.js';
import RacingView from '../view/RacingView.js';
import { validateCarNames, validateRound } from '../utils/validation.js';
import { SELECTOR, CAR, DELAY } from '../constants/constants.js';
import { $ } from '../utils/selector.js';

export default class RacingController {
  constructor() {
    this.model = new RacingGameModel();
    this.view = new RacingView();
  }

  app() {
    $(SELECTOR.ID.CAR_NAMES_BUTTON).addEventListener(
      'click',
      this.submitNameHandler.bind(this)
    );
    $(SELECTOR.ID.RACING_ROUND_SUBMIT).addEventListener(
      'click',
      this.submitRoundHandler.bind(this)
    );
  }

  submitNameHandler(e) {
    e.preventDefault();
    const nameList = this.view.getCarNameList();

    try {
      validateCarNames(nameList);
      this.model.cars = nameList;
      this.view.deactivateNamesForm();
      this.view.activateRoundForm();
    } catch (error) {
      alert(error.message);
    }
  }

  submitRoundHandler(e) {
    e.preventDefault();
    const racingRound = this.view.getRacingRound();

    try {
      validateRound(racingRound);
      this.model.round = Number(racingRound);
      this.view.deactivateNamesForm();
      this.view.deactivateRoundForm();
      this.startRacingGame();
    } catch (error) {
      alert(error.message);
    }
  }

  startRacingGame() {
    const { round } = this.model;
    let currentRound = 0;
    const playIntervalId = setInterval(() => {
      this.playEachTurn();
      currentRound += 1;
      if (currentRound >= round) {
        clearInterval(playIntervalId);
        this.displayResult();
        this.activateRestartButton();
        return;
      }
      RacingView.renderProgressLoading();
    }, DELAY.TURN_BETWEEN_TIME);
  }

  playEachTurn() {
    // const moves = this.model.cars.map(() => {
    //   return RacingController.moveOrNot();
    // });
    this.model.moveCarsOnce();
    this.view.renderProgress(this.model.cars);
  }

  displayResult() {
    const { winners } = this.model;
    this.view.renderResult(winners);
    setTimeout(() => {
      alert(`우승자는 ${winners.join(', ')}입니다.`);
    }, DELAY.NOTIFY_RESULT_TIME);
  }

  activateRestartButton() {
    $(SELECTOR.ID.RESTART_BUTTON).addEventListener(
      'click',
      this.restartGame.bind(this)
    );
  }

  restartGame() {
    this.view.reset();
    this.model.reset();
  }
}
