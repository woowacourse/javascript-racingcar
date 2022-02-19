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
    } catch (error) {
      // eslint-disable-next-line no-alert
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
      this.model.players = nameList;
      this.view.activateCountForm();
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }
  }

  startRacingGame() {
    this.view.deactivateCountForm();
    this.view.renderProgress(this.model.cars);

    const runRound = setInterval(() => {
      this.model.goToNextTurn();
      if (!this.model.round) {
        this.view.renderFinalProgress(this.model.cars);
        this.renderWinner();
        clearInterval(runRound);
        return;
      }
      this.view.renderProgress(this.model.cars);
    }, 1000);
  }

  renderWinner() {
    setTimeout(() => {
      this.view.renderResult(this.model.winners);
      this.activateRestartButton();
    }, 2000);
  }
}
