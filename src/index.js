import Car from './class/Car.js';
import View from './class/View.js';
import { ID, MESSAGE } from './constants.js';
import { getElement, getInputValue, getEnterEvent } from './utils/dom.js';
import {
  parseCarName,
  moveCars,
  getMaxCount,
  resetCars,
} from './utils/racingGame.js';
import {
  isAvailableCarNameLength,
  isNotDuplicatedCarNames,
  isAvailableRacingCount,
  isInteger,
} from './utils/validations.js';

class RacingCarGame {
  constructor() {
    this.cars = [];
    this.winners = [];
    this.view = new View();
    this.bindEvents();
  }

  bindEvents() {
    getElement(ID.CAR_NAMES_BUTTON).addEventListener('click', ({ target }) =>
      this.onSubmitCarName(getInputValue(target.parentElement)),
    );
    getElement(ID.RACING_COUNT_BUTTON).addEventListener('click', ({ target }) =>
      this.onSubmitRacingCount(+getInputValue(target.parentElement)),
    );
    getElement(ID.RESTART_BUTTON).addEventListener('click', () =>
      this.onClickRestart(),
    );
    getElement(ID.CAR_NAMES_INPUT).addEventListener(
      'keyup',
      ({ key, target }) =>
        getEnterEvent(key, () => this.onSubmitCarName(target.value)),
    );
    getElement(ID.RACING_COUNT_INPUT).addEventListener(
      'keyup',
      ({ key, target }) =>
        getEnterEvent(key, () => this.onSubmitRacingCount(+target.value)),
    );
  }

  onSubmitCarName(names) {
    const carNames = parseCarName(names);
    if (!isAvailableCarNameLength(carNames)) {
      return alert(MESSAGE.WRONG_NAME_LENGTH);
    }
    if (!isNotDuplicatedCarNames(carNames)) {
      return alert(MESSAGE.DUPLICATE_NAME);
    }
    this.cars = carNames.map(name => new Car(name));
    this.view.showRacingCountInput();
  }

  onSubmitRacingCount(count) {
    if (!isAvailableRacingCount(count)) {
      return alert(MESSAGE.WRONG_COUNT);
    }
    if (!isInteger(count)) {
      return alert(MESSAGE.NOT_DECIMAL_COUNT);
    }
    this.startGame(count);
  }

  onClickRestart() {
    this.cars = [];
    this.winners = [];
    this.view.restartGame();
  }

  getWinner() {
    const maxCount = getMaxCount(this.cars);
    return (this.winners = this.cars.filter(
      car => car.racingCount === maxCount,
    ));
  }

  startGame(count) {
    resetCars(this.cars);
    moveCars(this.cars, count);
    this.view.renderRacingStatus(this.cars);
    this.view.renderWinners(this.getWinner());
  }
}

new RacingCarGame();
