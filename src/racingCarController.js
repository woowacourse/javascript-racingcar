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
    this.$carNamesSubmit.addEventListener('click', this.handleCarNames.bind(this));
  }

  get $carNamesSubmit() {
    return this.view.$carNamesSubmit;
  }

  attachRacingCountEvents() {
    this.$racingCountSubmit.addEventListener('click', this.handleRacingCount.bind(this));
  }

  get $racingCountSubmit() {
    return this.view.$racingCountSubmit;
  }

  attachRestartEvents() {
    this.$restart.addEventListener('click', this.handleRestart.bind(this));
  }

  get $restart() {
    return this.view.$restart;
  }

  handleCarNames() {
    const carNamesInput = this.$carNamesInput.value.split(',');
    const carNames = carNamesInput.map((name) => name.trim());

    if (isValidCarNames(carNames)) {
      this.onValidCarNamesSubmit(carNames);

      return;
    }

    this.onInvalidCarNamesSubmit();
  }

  get $carNamesInput() {
    return this.view.$carNamesInput;
  }

  onValidCarNamesSubmit(carNames) {
    this.view.renderRacingCount();
    this.view.selectRacingCountDOM();
    this.attachRacingCountEvents();
    this.model.setCars(carNames);
    this.view.renderCars(this.model.cars);
  }

  onInvalidCarNamesSubmit() {
    alert(ERROR_MESSAGE.CAR_NAMES);
    this.view.resetCarNamesInput();
  }

  handleRacingCount() {
    const racingCount = Number(this.$racingCountInput.value);

    if (isValidRacingCount(racingCount)) {
      this.onValidRacingCountSubmit(racingCount);

      return;
    }

    this.onInvalidRacingCountSubmit();
  }

  get $racingCountInput() {
    return this.view.$racingCountInput;
  }

  onValidRacingCountSubmit(racingCount) {
    this.model.setRacingCount(racingCount);
    this.race(racingCount);
    this.model.cars.forEach((car) => this.view.renderMoveForwardArrow(car));
    this.view.renderWinners(this.model.getWinnners());
    this.view.renderRestart();
    this.view.selectRestartDOM();
    this.attachRestartEvents();
  }

  onInvalidRacingCountSubmit() {
    alert(ERROR_MESSAGE.RACING_COUNT);
    this.view.resetRacingCountInput();
  }

  race(racingCount) {
    for (let i = 0; i < racingCount; i += 1) {
      this.cars.forEach((car) => car.moveForward());
    }
  }

  get cars() {
    return this.model.cars;
  }

  handleRestart() {
    this.view.renderInit();
    this.model.init();
  }
}
