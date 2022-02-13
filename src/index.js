import Car from './Car.js';
import { ID, MESSAGE } from './constants.js';
import {
  getElement,
  getInputValue,
  resetInputValue,
  clearHTML,
  setHTML,
  getEnterEvent,
} from './utils/dom.js';
import { userStatusView, winnersView } from './view.js';
import {
  parseCarName,
  validateCarNameLength,
  validateDuplicateCarName,
  validateRacingCount,
  moveCars,
  getMaxCount,
  resetCars,
} from './utils/index.js';

class CarRacing {
  constructor() {
    this.cars = [];
    this.winners = [];
    this.bindEvents();
  }

  bindEvents() {
    getElement(ID.CAR_NAMES_BUTTON).addEventListener('click', ({ target }) =>
      this.onSubmitCarName(getInputValue(target.parentElement)),
    );
    getElement(ID.RACING_COUNT_BUTTON).addEventListener('click', ({ target }) =>
      this.onSubmitRacingCount(getInputValue(target.parentElement)),
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
        getEnterEvent(key, () => this.onSubmitRacingCount(target.value)),
    );
  }

  onSubmitCarName(names) {
    const carNames = parseCarName(names);
    if (!validateCarNameLength(carNames)) {
      return alert(MESSAGE.WRONG_NAME_LENGTH);
    }
    if (!validateDuplicateCarName(carNames)) {
      return alert(MESSAGE.DUPLICATE_NAME);
    }
    this.cars = carNames.map(name => new Car(name));
  }

  onSubmitRacingCount(count) {
    if (!this.cars.length) {
      return alert(MESSAGE.NO_CAR);
    }
    if (!validateRacingCount(count)) {
      return alert(MESSAGE.WRONG_COUNT);
    }
    this.startGame(count);
  }

  onClickRestart() {
    resetInputValue(getElement(ID.CAR_NAMES_INPUT));
    resetInputValue(getElement(ID.RACING_COUNT_INPUT));

    clearHTML(getElement(ID.RACING_WINNERS));
    clearHTML(getElement(ID.RACING_STATUS));
    this.cars = [];
    this.winners = [];
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
    setHTML(
      getElement(ID.RACING_STATUS),
      this.cars.map(car => userStatusView(car)).join(''),
    );
    setHTML(getElement(ID.RACING_WINNERS), winnersView(this.getWinner()));
  }
}

new CarRacing();
