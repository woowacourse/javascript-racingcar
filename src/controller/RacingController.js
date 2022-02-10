import { validateCarNames, validateCount } from '../utils/validation.js';

export default class RacingController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  app() {
    document
      .getElementById('car-names-submit')
      .addEventListener('click', this.submitNameHandler.bind(this));
    document
      .getElementById('racing-count-submit')
      .addEventListener('click', this.submitCountHandler.bind(this));
  }

  submitNameHandler(e) {
    e.preventDefault();
    this.getCarNamesInArrayType();
  }

  submitCountHandler(e) {
    e.preventDefault();
    const racingCount = parseInt(
      document.getElementById('racing-count-input').value,
      10
    );

    const error = validateCount(racingCount);
    if (error) {
      return alert(error);
    }

    this.model.round = racingCount;

    this.startRacingGame();

    this.activateRestartButton();

    return true;
  }

  activateRestartButton() {
    document
      .getElementById('restart-button')
      .addEventListener('click', this.restartGame.bind(this));
  }

  restartGame() {
    this.view.reset();
    this.model.reset();
  }

  getCarNamesInArrayType() {
    let nameList = document.getElementById('car-names-input').value.split(',');
    nameList = nameList.map((name) => name.trim());

    const error = validateCarNames(nameList);
    if (error) {
      return alert(error);
    }
    this.model.players = nameList;
    return true;
  }

  startRacingGame() {
    while (this.model.round) {
      this.model.goToNextTurn();
    }
    this.view.renderProgress(this.model.cars);
    this.view.renderResult(this.model.winners);
  }
}
