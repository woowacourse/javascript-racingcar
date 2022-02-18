import Car from './model/Car.js';
import { $ } from './utils/dom.js';
import {
  CELEBRATE_MESSAGE,
  DELAY_TIME,
  ERROR_MESSAGE,
  RACING_MIN_COUNT,
  RACING_SCORE,
} from './utils/constants.js';
import { isValidLength, isBlank, handleError, isEffectiveScore } from './utils/validation.js';
import { getRandomNumber, delayedAlert } from './utils/general.js';
import { showElement, hideElement } from './utils/attribute.js';
import {
  renderRacingResult,
  renderFinalWinner,
  renderArrow,
  removeSpinner,
} from './views/racingResult.js';

class RacingCarGame {
  constructor() {
    this.cars = [];
    this.bindEvents();
  }

  bindEvents() {
    $('#car-names-button').addEventListener('click', this.handleCarNamesSubmit.bind(this));
    $('#racing-count-button').addEventListener('click', this.handleRacingCountSubmit.bind(this));
    $('#reset-btn').addEventListener('click', this.restartRacingGame.bind(this));
  }

  getMaxNumber() {
    return this.cars.reduce((acc, { distance }) => {
      return acc > distance ? acc : distance;
    }, 0);
  }

  selectWinner() {
    const maxDistance = this.getMaxNumber();
    return this.cars.filter((car) => car.distance === maxDistance);
  }

  isValidCarNames(carName) {
    if (!carName.every(isValidLength)) {
      handleError(ERROR_MESSAGE.NAME_TOO_LONG);
      return false;
    }
    if (!carName.every(isBlank)) {
      handleError(ERROR_MESSAGE.NAME_CANNOT_BE_BLANK);
      return false;
    }
    return true;
  }

  isValidRacingCount(number) {
    if (number < RACING_MIN_COUNT) {
      handleError(ERROR_MESSAGE.COUNT_TOO_SMALL);
      return false;
    }
    return true;
  }

  generateCars(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }

  playRace() {
    this.cars.forEach((car) => {
      const number = getRandomNumber(RACING_SCORE.MIN, RACING_SCORE.MAX);
      if (isEffectiveScore(number)) {
        car.moveForward();
        renderArrow(car.name);
      }
    });
  }

  endRacingGame() {
    const finalWinner = this.selectWinner()
      .map((winner) => winner.name)
      .join(', ');
    renderFinalWinner(finalWinner);
    removeSpinner();
    showElement($('#final-winner'));
    delayedAlert(CELEBRATE_MESSAGE, DELAY_TIME.ALERT);
  }

  startRacingGame(inputNumber) {
    let lap = 0;
    const raceTimer = setInterval(() => {
      this.playRace();

      lap += 1;
      if (lap === Number(inputNumber)) {
        clearInterval(raceTimer);
        this.endRacingGame();
      }
    }, DELAY_TIME.RACE);
  }

  startUpScreen() {
    $('#car-names-input').value = '';
    $('#racing-count-input').value = '';
    $('#result-racing').innerHTML = '';
    hideElement($('#racing-count-form'));
    hideElement($('#result-screen'));
    hideElement($('#final-winner'));
  }

  handleCarNamesSubmit() {
    const inputCarNames = $('#car-names-input')
      .value.split(',')
      .map((car) => car.trim());

    if (!this.isValidCarNames(inputCarNames)) {
      $('#car-names-input').value = '';
      return;
    }
    this.generateCars(inputCarNames);
    showElement($('#racing-count-form'));
  }

  handleRacingCountSubmit() {
    const inputNumber = $('#racing-count-input').value;
    if (!this.isValidRacingCount(inputNumber)) {
      return;
    }
    showElement($('#result-screen'));
    renderRacingResult(this.cars);
    this.startRacingGame(inputNumber);
  }

  restartRacingGame() {
    this.cars = [];
    this.startUpScreen();
  }
}

// eslint-disable-next-line no-new
new RacingCarGame();
