import Car from './model/Car.js';
import { $ } from './utils/dom.js';
import { SELECTOR, CELEBRATE_MESSAGE, DELAY_TIME, ERROR_MESSAGE, MOVE_SCORE } from './utils/constants.js';
import {
  isValidCarNameLength,
  isValidCarNameBlank,
  isValidRacingCount,
  isEffectiveScore,
} from './utils/validation.js';
import { getMaxNumber, getRandomNumber, delayedAlert } from './utils/general.js';
import { showElement } from './utils/attribute.js';
import {
  renderRacingResult,
  renderFinalWinner,
  renderArrow,
  removeSpinner,
  startUpScreen,
} from './views/racingResult.js';

class RacingCarGame {
  constructor() {
    this.cars = [];
    this.bindEvents();
  }

  bindEvents() {
    $(SELECTOR.CAR_NAMES_BUTTON).addEventListener('click', this.handleCarNamesSubmit.bind(this));
    $(SELECTOR.RACING_COUNT_BUTTON).addEventListener('click', this.handleRacingCountSubmit.bind(this));
    $(SELECTOR.RESTART_BUTTON).addEventListener('click', this.restartRacingGame.bind(this));
  }

  selectWinner() {
    const maxDistance = getMaxNumber(this.cars);
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
    showElement($(SELECTOR.RESULT_CONTAINER));
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

  handleCarNamesSubmit() {
    const inputCarNames = $(SELECTOR.CAR_NAMES_INPUT)
      .value.split(',')
      .map((car) => car.trim());

    if (!isValidCarNameLength(inputCarNames)) {
      $(SELECTOR.CAR_NAMES_INPUT).value = '';
      alert(ERROR_MESSAGE.NAME_TOO_LONG);
      return;
    }
    if (!isValidCarNameBlank(inputCarNames)) {
      $(SELECTOR.CAR_NAMES_INPUT).value = '';
      alert(ERROR_MESSAGE.NAME_CANNOT_BE_BLANK);
      return;
    }

    this.generateCars(inputCarNames);
    showElement($(SELECTOR.RACING_COUNT_CONTAINER));
  }

  handleRacingCountSubmit() {
    const inputNumber = $(SELECTOR.RACING_COUNT_INPUT).value;
    if (isValidRacingCount(inputNumber)) {
      $(SELECTOR.RACING_COUNT_INPUT).value = '';
      alert(ERROR_MESSAGE.COUNT_TOO_SMALL);
      return;
    }
    showElement($(SELECTOR.RACING_CONTAINER));
    renderRacingResult(this.cars);
    this.startRacingGame(inputNumber);
  }

  restartRacingGame() {
    this.cars = [];
    startUpScreen();
  }
}

new RacingCarGame();
