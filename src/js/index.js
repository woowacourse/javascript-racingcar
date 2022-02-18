import Car from './model/Car.js';
import { $ } from './utils/dom.js';
import { DELAY_TIME, ERROR_MESSAGE, RACING_MIN_COUNT, RACING_SCORE } from './utils/constants.js';
import { isValidLength, isBlank, handleError, isEffectiveScore } from './utils/validation.js';
import { getMaxNumber, getRandomNumber } from './utils/getNumber.js';
import { showElement, hideElement } from './utils/attribute.js';
import { wait } from './utils/wait.js';
import {
  renderRacingResult,
  renderFinalWinner,
  renderArrow,
  removeSpinner,
} from './views/racingResult.js';

class RacingCar {
  constructor() {
    this.cars = [];
    this.bindEvents();
  }

  bindEvents() {
    $('#car-names-button').addEventListener('click', this.handleCarNamesSubmit.bind(this));
    $('#racing-count-button').addEventListener('click', this.handleRacingCountSubmit.bind(this));
    $('#reset-btn').addEventListener('click', this.restartRacingGame.bind(this));
  }

  selectWinner() {
    const maxDistance = getMaxNumber(this.cars);
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

  async startRacingGame(inputNumber) {
    for (let i = 0; i < inputNumber; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      await wait();
      this.cars.forEach((car) => {
        const number = getRandomNumber(RACING_SCORE.MIN, RACING_SCORE.MAX);
        if (isEffectiveScore(number)) {
          car.moveForward();
          renderArrow(car.name);
        }
      });
    }
  }

  showCongratulationsMessage(winner) {
    setTimeout(() => {
      handleError(`🎉 축하합니다!! 우승자는 ${winner} 입니다. 🎉`);
    }, DELAY_TIME.ALERT);
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

  async handleRacingCountSubmit() {
    const inputNumber = $('#racing-count-input').value;
    if (!this.isValidRacingCount(inputNumber)) {
      return;
    }
    showElement($('#result-screen'));
    renderRacingResult(this.cars);
    await this.startRacingGame(inputNumber);

    const finalWinner = this.selectWinner()
      .map((winner) => winner.name)
      .join(', ');
    renderFinalWinner(finalWinner);
    removeSpinner();
    showElement($('#final-winner'));
    this.showCongratulationsMessage(finalWinner);
  }

  restartRacingGame() {
    this.cars = [];
    this.startUpScreen();
  }
}

// eslint-disable-next-line no-new
new RacingCar();
