import Car from './model/Car.js';
import { $ } from './utils/dom.js';
import { CELEBRATE_MESSAGE, DELAY_TIME, ERROR_MESSAGE, MOVE_SCORE } from './utils/constants.js';
import {
  isValidCarNameLength,
  isValidCarNameBlank,
  isValidRacingCount,
  isEffectiveScore,
} from './utils/validation.js';
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

  generateCars(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }

  playRace() {
    this.cars.forEach((car) => {
      const number = getRandomNumber(MOVE_SCORE.MIN, MOVE_SCORE.MAX);
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

    if (!isValidCarNameLength(inputCarNames)) {
      alert(ERROR_MESSAGE.NAME_TOO_LONG);
      return;
    }
    if (!isValidCarNameBlank(inputCarNames)) {
      $('#car-names-input').value = '';
      alert(ERROR_MESSAGE.NAME_CANNOT_BE_BLANK);
      return;
    }

    this.generateCars(inputCarNames);
    showElement($('#racing-count-form'));
  }

  handleRacingCountSubmit() {
    const inputNumber = $('#racing-count-input').value;
    if (isValidRacingCount(inputNumber)) {
      alert(ERROR_MESSAGE.COUNT_TOO_SMALL);
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
