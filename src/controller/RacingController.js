import { validateCarNames, validateCount } from '../utils/validation.js';
import { SELECTOR } from '../constants/constants.js';
import DomUtils from '../utils/dom-utils.js';

export default class RacingController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  app() {
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
    const racingCount = DomUtils.$(SELECTOR.ID.RACING_COUNT_INPUT).value;

    try {
      validateCount(racingCount);
      this.view.deactivateNamesForm();
      this.model.setRound(Number(racingCount));
      this.startRacingGame();
      this.activateRestartButton();
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
    this.view.reset();
    this.model.reset();
  }

  getCarNamesInArrayType() {
    const nameList = DomUtils.$(SELECTOR.ID.CAR_NAMES_INPUT)
      .value.split(',')
      .map((name) => name.trim());

    try {
      validateCarNames(nameList);
      this.view.activateCountForm();
      this.model.players = nameList;
    } catch (error) {
      alert(error.message);
    }
  }

  startRacingGame() {
    while (this.model.round) {
      this.model.goToNextTurn();
    }
    this.view.deactivateCountForm();
    this.view.renderProgress(this.model.cars);
    this.view.renderResult(this.model.winners);
  }
}
