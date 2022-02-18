import RacingGameModel from '../model/RacingGameModel.js';
import RacingView from '../view/RacingView.js';
import RandomUtils from '../utils/random.js';
import { validateCarNames, validateCount } from '../utils/validation.js';
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
    $(SELECTOR.ID.RACING_COUNT_SUBMIT).addEventListener(
      'click',
      this.submitCountHandler.bind(this)
    );
  }

  submitNameHandler(e) {
    e.preventDefault();
    const nameList = RacingController.getCarNameList();

    try {
      validateCarNames(nameList);
      this.model.cars = nameList;
      this.view.deactivateNamesForm();
      this.view.activateCountForm();
    } catch (error) {
      alert(error.message);
    }
  }

  submitCountHandler(e) {
    e.preventDefault();
    const racingCount = RacingController.getRacingCount();

    try {
      validateCount(racingCount);
      this.model.round = Number(racingCount);
      this.view.deactivateNamesForm();
      this.view.deactivateCountForm();
      this.startRacingGame();
    } catch (error) {
      alert(error.message);
    }
  }

  startRacingGame() {
    const { round } = this.model;
    let progressingRound = 1;
    const playIntervalId = setInterval(() => {
      this.playEachTurn();
      progressingRound += 1;
      if (progressingRound >= round) {
        clearInterval(playIntervalId);
        this.displayResult();
        this.activateRestartButton();
        return;
      }
      RacingView.renderProgressLoading();
    }, DELAY.TURN_BETWEEN_TIME);
  }

  playEachTurn() {
    const moves = this.model.cars.map(() => {
      return RacingController.moveOrNot();
    });
    this.model.moveCars(moves);
    this.view.renderProgress(this.model.cars);
  }

  displayResult() {
    const { winners } = this.model;
    this.view.renderResult(winners);
    setTimeout(() => {
      alert(`우승자는 ${winners.join(', ')}입니다.`);
    }, DELAY.NOTIFY_RESULT_TIME);
  }

  static moveOrNot() {
    const randomNumber = RandomUtils.pickRandomNumber();
    if (randomNumber >= CAR.REFERENCE_POINT_FOR_MOVEMENT) {
      return 1;
    }
    return 0;
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

  static getCarNameList() {
    const nameList = $(SELECTOR.ID.CAR_NAMES_INPUT).value.split(',');
    return nameList.map((name) => name.trim());
  }

  static getRacingCount() {
    return $(SELECTOR.ID.RACING_COUNT_INPUT).value;
  }
}
