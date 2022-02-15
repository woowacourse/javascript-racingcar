/* eslint-disable max-lines-per-function */
import RacingCarView from './racingCarView.js';
import RacingCarModel from './racingCarModel.js';
import { isValidCarNames, isValidRacingCount } from './common/validator.js';
import { ERROR_MESSAGE } from './common/constants.js';

export default class RacingCarController {
  constructor() {
    this.view = new RacingCarView();
    this.model = new RacingCarModel();

    this.init();
  }

  init() {
    this.view.renderHeader();
    this.view.renderCarNames();
    this.view.selectCarNamesDOM();
    this.attachCarNamesEvents();
  }

  attachCarNamesEvents() {
    this.view.$carNamesSubmit.addEventListener('click', this.handleCarNames.bind(this));
  }

  attachRacingCountEvents() {
    this.view.$racingCountSubmit.addEventListener('click', this.handleRacingCount.bind(this));
  }

  attachRestartEvents() {
    this.view.$restart.addEventListener('click', this.handleRestart.bind(this));
  }

  handleCarNames(event) {
    event.preventDefault();

    const carNamesInput = this.view.$carNamesInput.value.split(',');
    const carNames = carNamesInput.map((name) => name.trim());

    if (isValidCarNames(carNames)) {
      this.model.setCars(carNames);
      this.view.renderRacingCount();
      this.view.selectRacingCountDOM();
      this.attachRacingCountEvents();
      this.view.renderCars(this.model.cars);

      return;
    }

    alert(ERROR_MESSAGE.CAR_NAMES);
    this.view.resetCarNamesInput();
  }

  handleRacingCount(event) {
    event.preventDefault();

    const racingCount = Number(this.view.$racingCountInput.value);

    if (isValidRacingCount(racingCount)) {
      this.model.setRacingCount(racingCount);
      this.race(racingCount);
      this.model.cars.forEach((car) => this.view.renderMoveForwardArrow(car));
      this.view.renderWinners(this.model.getWinnners());
      this.view.renderRestart();
      this.view.selectRestartDOM();
      this.attachRestartEvents();

      return;
    }

    alert(ERROR_MESSAGE.RACING_COUNT);
    this.view.resetRacingCountInput();
  }

  race(racingCount) {
    for (let i = 0; i < racingCount; i += 1) {
      this.model.cars.forEach((car) => car.moveForward());
    }
  }

  handleRestart() {
    this.view.renderInit();
    this.model.init();
  }
}
