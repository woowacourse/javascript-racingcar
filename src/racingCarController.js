import { ERROR_MESSAGE } from './common/constants.js';
import { isValidCarNames, isValidRacingCount } from './common/validator.js';

import RacingCarModel from './racingCarModel.js';
import RacingCarView from './racingCarView.js';

export default class RacingCarController {
  constructor() {
    this.model = new RacingCarModel();
    this.view = new RacingCarView();
    this.init();
  }

  init() {
    this.view.renderHeader();
    this.view.renderCarNames();
    this.view.selectCarNamesDOM();
    this.#attachCarNamesEvents();
  }

  #attachCarNamesEvents() {
    this.view.$carNamesSubmit.addEventListener('click', this.#handleCarNames.bind(this));
  }

  #handleCarNames() {
    const carNamesInput = this.view.$carNamesInput.value.split(',');
    const carNames = carNamesInput.map((name) => name.trim());

    if (!isValidCarNames(carNames)) {
      this.#onInvalidCarNamesSubmit();

      return;
    }

    this.#onValidCarNamesSubmit(carNames);
  }

  #onInvalidCarNamesSubmit() {
    alert(ERROR_MESSAGE.CAR_NAMES);
    this.view.resetCarNamesInput();
  }

  #onValidCarNamesSubmit(carNames) {
    RacingCarView.renderRacingCount();
    this.view.selectRacingCountDOM();
    this.#attachRacingCountEvents();
    this.model.setCars(carNames);
    RacingCarView.renderCars(this.model.cars);
  }

  #attachRacingCountEvents() {
    this.view.$racingCountSubmit.addEventListener('click', this.#handleRacingCount.bind(this));
  }

  #handleRacingCount() {
    const racingCount = Number(this.view.$racingCountInput.value);

    if (!isValidRacingCount(racingCount)) {
      this.#onInvalidRacingCountSubmit();

      return;
    }

    this.#onValidRacingCountSubmit(racingCount);
  }

  #onInvalidRacingCountSubmit() {
    alert(ERROR_MESSAGE.RACING_COUNT);
    this.view.resetRacingCountInput();
  }

  #onValidRacingCountSubmit(racingCount) {
    this.model.setRacingCount(racingCount);
    this.#race(racingCount);
    this.model.cars.forEach((car) => RacingCarView.renderMoveForwardArrow(car));
    RacingCarView.renderWinners(this.model.getWinnners());
    RacingCarView.renderRestart();
    this.view.selectRestartDOM();
    this.#attachRestartEvents();
  }

  #race(racingCount) {
    for (let i = 0; i < racingCount; i += 1) {
      this.model.cars.forEach((car) => car.moveForward());
    }
  }

  #attachRestartEvents() {
    this.view.$restart.addEventListener('click', this.#handleRestart.bind(this));
  }

  #handleRestart() {
    this.model.init();
    this.view.renderReset();
  }
}
