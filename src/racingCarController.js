import { ERROR_MESSAGE } from './common/constants.js';
import { isValidCarNames, isValidRacingCount } from './common/validator.js';

import RacingCarModel from './racingCarModel.js';
import RacingCarView from './racingCarView.js';

export default class RacingCarController {
  constructor() {
    this.model = new RacingCarModel();
    this.view = new RacingCarView();
  }

  init() {
    this.view.renderHeader();
    this.view.renderCarNames();
    this.view.selectCarNamesDOM();
    this.#attachCarNamesEvents();
  }

  #attachCarNamesEvents() {
    this.view.$getCarNamesForm().addEventListener('submit', this.#handleCarNames.bind(this));
  }

  #handleCarNames(event) {
    event.preventDefault();
    const carNamesInput = this.view.$getCarNamesInput().value.split(',');
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
    this.view.resetRacingCountInput();
    this.#attachRacingCountEvents();
    this.model.setCars(carNames);
    RacingCarView.renderCars(this.model.getCars());
  }

  #attachRacingCountEvents() {
    this.view.$getRacingCountForm().addEventListener('submit', this.#handleRacingCount.bind(this));
  }

  #handleRacingCount(event) {
    event.preventDefault();
    const racingCount = this.view.$getRacingCountInput().valueAsNumber;

    if (this.model.getRacingCount()) return;

    if (!isValidRacingCount(racingCount)) {
      this.#onInvalidRacingCountSubmit();

      return;
    }

    this.#startRace(racingCount);
    this.#finishRace();
  }

  #onInvalidRacingCountSubmit() {
    alert(ERROR_MESSAGE.RACING_COUNT);
    this.view.resetRacingCountInput();
  }

  #startRace(racingCount) {
    this.model.setRacingCount(racingCount);
    this.model.getCars().forEach((car) => {
      RacingCarView.renderLoading(car);
      this.#racing(car);
    });
  }

  #racing(car) {
    let turn = 0;
    const racingTimer = setInterval(() => {
      RacingCarController.#moveOrStop(car);
      turn += 1;

      if (turn === this.model.getRacingCount()) {
        RacingCarView.removeLoading(car);
        clearInterval(racingTimer);
      }
    }, 1000);
  }

  static #moveOrStop(car) {
    car.moveForward();

    if (car.isMoved) {
      RacingCarView.renderMoveForward(car);
    }
  }

  #finishRace() {
    setTimeout(() => {
      const winners = this.model.getWinnners();
      RacingCarView.renderWinners(winners);
      setTimeout(() => {
        alert(`축하합니다! 최종 우승자는 🎉 ${winners.join(', ')} 🎉 입니다!`);
      }, 2000);
      RacingCarView.renderRestart();
      this.view.selectRestartDOM();
      this.#attachRestartEvents();
    }, 1000 * this.model.getRacingCount());
  }

  #attachRestartEvents() {
    this.view.$getRestart().addEventListener('click', this.#handleRestart.bind(this));
  }

  #handleRestart() {
    this.model.init();
    this.view.renderReset();
  }
}
