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
    const racingCount = this.view.$racingCountInput.valueAsNumber;

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
    this.model.cars.forEach((car) => {
      RacingCarView.renderLoading(car);
      this.#racing(car);
    });
  }

  #racing(car) {
    let turn = 0;
    const racingInterval = setInterval(() => {
      car.moveForward();

      if (car.isMoved) RacingCarView.renderMoveForward(car);

      // eslint-disable-next-line no-plusplus
      if (++turn === this.model.racingCount) {
        RacingCarView.removeLoading(car);
        clearInterval(racingInterval);
      }
    }, 1000);
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
    }, 1000 * this.model.racingCount);
  }

  #attachRestartEvents() {
    this.view.$restart.addEventListener('click', this.#handleRestart.bind(this));
  }

  #handleRestart() {
    this.model.init();
    this.view.renderReset();
  }
}
