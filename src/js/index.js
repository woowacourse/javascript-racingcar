import Car from './model/Car.js';
import { $ } from './utils/dom.js';
import { ERROR_MESSAGE, STANDARD } from './utils/constants.js';
import { isValidLength, isBlank, handleError } from './utils/validation.js';
import { getMaxNumber } from './utils/getNumber.js';
import {
  renderRacingResult,
  renderFinalWinner,
  showCountInput,
  showRacingResult,
  startUpScreen,
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
    if (number < STANDARD.MIN_INPUT_COUNT) {
      handleError(ERROR_MESSAGE.COUNT_TOO_SMALL);
      return false;
    }
    return true;
  }

  generateCars(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }

  startRacingGame(inputNumber) {
    for (let i = 0; i < inputNumber; i += 1) {
      this.cars.forEach((car) => car.tryMoveForward());
    }
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
    showCountInput();
  }

  handleRacingCountSubmit() {
    const inputNumber = $('#racing-count-input').value;
    if (!this.isValidRacingCount(inputNumber)) {
      return;
    }
    showRacingResult();
    this.startRacingGame(inputNumber);
    renderRacingResult(this.cars);

    const finalWinner = this.selectWinner()
      .map((winner) => winner.name)
      .join(', ');
    renderFinalWinner(finalWinner);
  }

  restartRacingGame() {
    this.cars = [];
    startUpScreen();
  }
}

// eslint-disable-next-line no-new
new RacingCar();
