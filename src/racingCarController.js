import RacingCarView from './racingCarView.js';
import RacingCarModel from './racingCarModel.js';
import { isValidCarNames, isValidRacingCount } from './common/validator.js';
import { ERROR_MESSAGE, DELAY } from './common/constants.js';

export default class RacingCarController {
  constructor() {
    this.view = new RacingCarView();
    this.model = new RacingCarModel();
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

  handleRestart() {
    this.view.renderInit();
    this.model.init();
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
      this.startRace(racingCount);

      return;
    }

    alert(ERROR_MESSAGE.RACING_COUNT);
    this.view.resetRacingCountInput();
  }

  startRace(racingCount) {
    this.view.showSpinners();
    const raceInterval = this.raceInterval();

    setTimeout(() => {
      clearInterval(raceInterval);
      this.view.hideSpinners();
      this.endRace();
    }, racingCount * DELAY.RACE_INTERVAL);
  }

  raceInterval() {
    return setInterval(() => {
      this.view.hideSpinners();
      this.model.cars.forEach((car) => {
        if (car.tryMoveForward()) this.view.renderMoveForwardArrow(car);
      });
      this.view.showSpinners();
    }, 1000);
  }

  endRace() {
    const winners = this.model.getWinnners();

    this.view.renderWinners(winners);
    this.view.renderRestart();
    this.view.selectRestartDOM();
    this.attachRestartEvents();

    setTimeout(() => {
      this.view.renderCelebration(winners);
    }, DELAY.CELEBRATION);
  }
}
