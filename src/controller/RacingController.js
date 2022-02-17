import { validateCarNames, validateCount } from '../utils/validation.js';
import { SELECTOR } from '../constants/constants.js';
import RacingGameModel from '../model/RacingGameModel.js';
import RacingView from '../view/RacingView.js';

export default class RacingController {
  constructor() {
    this.model = new RacingGameModel();
    this.view = new RacingView();
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
      this.startRacingGame();
      this.activateRestartButton();
    } catch (error) {
      alert(error.message);
    }
  }

  startRacingGame() {
    while (this.model.round) {
      this.model.goToNextTurn();
    }
    this.view.deactivateCountForm();
    this.view.renderName(this.model.getCarsName());
    this.view.renderProgress(this.model.cars);
    this.view.renderResult(this.model.winners);
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

  static getCarNameList() {
    const nameList = document
      .getElementById(SELECTOR.ID.CAR_NAMES_INPUT)
      .value.split(',');
    return nameList.map((name) => name.trim());
  }

  static getRacingCount() {
    return document.getElementById(SELECTOR.ID.RACING_COUNT_INPUT).value;
  }
}
