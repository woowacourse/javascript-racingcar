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

    const racingCount = this.view.$racingCountInput.valueAsNumber;

    if (isValidRacingCount(racingCount)) {
      this.model.setRacingCount(racingCount);
      this.race(racingCount);

      return;
    }

    alert(ERROR_MESSAGE.RACING_COUNT);
    this.view.resetRacingCountInput();
  }

  race(racingCount) {
    console.log('spinner 킴');
    const raceInterval = this.raceInterval();

    setTimeout(() => {
      clearInterval(raceInterval);
      this.renderResultAfterTime();
    }, racingCount * 1000);
  }

  renderResultAfterTime() {
    return setTimeout(() => {
      this.view.renderWinners(this.model.getWinnners());
      this.view.renderRestart();
      this.view.selectRestartDOM();
      this.attachRestartEvents();
    }, 2000);
  }

  raceInterval() {
    return setInterval(() => {
      console.log('spinner 끔');
      this.model.cars.forEach((car) => {
        if (car.tryMoveForward()) this.view.renderMoveForwardArrow(car);
      });
      console.log('spinner 킴');
    }, 1000);
  }

  handleRestart() {
    this.view.renderInit();
    this.model.init();
  }
}
