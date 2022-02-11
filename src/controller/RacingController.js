import { validateCarNames, validateCount } from '../utils/validation.js';
import { SELECTOR } from '../constants/constants.js';

export default class RacingController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  app() {
    document
      .getElementById(SELECTOR.ID.CAR_NAMES_BUTTON)
      .addEventListener('click', this.submitNameHandler.bind(this));
    document
      .getElementById(SELECTOR.ID.RACING_COUNT_SUBMIT)
      .addEventListener('click', this.submitCountHandler.bind(this));
  }

  submitNameHandler(e) {
    e.preventDefault();
    this.getCarNamesInArrayType();
  }

  submitCountHandler(e) {
    e.preventDefault();
    const racingCount = document.getElementById(
      SELECTOR.ID.RACING_COUNT_INPUT
    ).value;

    const error = validateCount(racingCount);
    if (error) {
      return alert(error);
    }
    this.view.deactivateNamesForm();
    this.model.round = Number(racingCount);
    this.startRacingGame();
    this.activateRestartButton();

    return true;
  }

  activateRestartButton() {
    document
      .getElementById(SELECTOR.ID.RESTART_BUTTON)
      .addEventListener('click', this.restartGame.bind(this));
  }

  restartGame() {
    this.view.reset();
    this.model.reset();
  }

  getCarNamesInArrayType() {
    let nameList = document
      .getElementById(SELECTOR.ID.CAR_NAMES_INPUT)
      .value.split(',');
    nameList = nameList.map((name) => name.trim());

    const error = validateCarNames(nameList);
    if (error) {
      return alert(error);
    }
    this.view.activateCountForm();
    this.model.players = nameList;
    return true;
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
