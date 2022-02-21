import { validateCarNames, validateCount } from '../utils/validation.js';
import { SELECTOR, TIME } from '../constants/constants.js';
import DomUtils from '../utils/dom-utils.js';

export default class RacingController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    DomUtils.$(SELECTOR.ID.CAR_NAMES_BUTTON).addEventListener(
      'click',
      this.submitNameHandler.bind(this)
    );
    DomUtils.$(SELECTOR.ID.RACING_COUNT_SUBMIT).addEventListener(
      'click',
      this.submitCountHandler.bind(this)
    );
  }

  submitNameHandler(e) {
    e.preventDefault();
    this.getCarNamesInArrayType();
  }

  submitCountHandler(e) {
    e.preventDefault();
    const racingCount = DomUtils.$(SELECTOR.ID.RACING_COUNT_INPUT).value.trim();

    try {
      validateCount(racingCount);
      this.view.deactivateNamesForm();
      this.model.initialRound = Number(racingCount);
      this.startRacingGame();
    } catch (error) {
      alert(error.message);
    }
  }

  activateRestartButton() {
    DomUtils.$(SELECTOR.ID.RESTART_BUTTON).addEventListener(
      'click',
      this.restartGame.bind(this)
    );
  }

  restartGame() {
    this.view.clearCelebration();
    this.view.reset();
    this.model.reset();
  }

  getCarNamesInArrayType() {
    const nameList = DomUtils.$(SELECTOR.ID.CAR_NAMES_INPUT)
      .value.split(',')
      .map((name) => name.trim());

    try {
      validateCarNames(nameList);
      this.model.players = nameList;
      this.view.activateCountForm();
    } catch (error) {
      alert(error.message);
    }
  }

  startRacingGame() {
    this.view.deactivateCountForm();
    this.view.initCarList(this.model.carNameList, this.model.round);
    const runRound = setInterval(() => {
      this.model.goToNextTurn();
      this.view.renderProgress(this.model.movedCars);
      if (!this.model.round) {
        this.renderWinner();
        clearInterval(runRound);
      }
    }, TIME.DELAY_RACE_TIME);
  }

  renderWinner() {
    this.view.renderResult(this.model.winners);
    this.activateRestartButton();
  }
}
