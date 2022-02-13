import Car from './Car.js';
import { ID, MESSAGE } from './constants.js';
import { getElement, getInputValue } from './utils/dom.js';
import { userStatusView, winnersView } from './view.js';
import {
  parseCarName,
  validateCarNameLength,
  validateDuplicateCarName,
  validateRacingCount,
  moveCars,
  getMaxCount,
} from './utils/index.js';

class CarRacing {
  constructor() {
    this.cars = [];
    this.winners = [];
    this.bindEvents();
  }

  bindEvents() {
    getElement(ID.CAR_NAMES_FORM).addEventListener('submit', event => {
      event.preventDefault();
      this.onSubmitCarName(getInputValue(event.target));
    });

    getElement(ID.RACING_COUNT_FORM).addEventListener('submit', event => {
      event.preventDefault();
      this.onSubmitRacingCount(getInputValue(event.target));
    });

    getElement(ID.RESTART_BUTTON).addEventListener('click', () => {
      this.onClickRestart();
    });
  }

  onSubmitCarName(names) {
    if (this.cars.length) {
      return alert(MESSAGE.REINPUT_NAME);
    }
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
    if (this.winners.length) {
      return alert(MESSAGE.REINPUT_COUNT);
    }
    if (!this.cars.length) {
      return alert(MESSAGE.NO_CAR);
    }
    if (!validateRacingCount(count)) {
      return alert(MESSAGE.WRONG_COUNT);
    }
    moveCars(this.cars, count);
    getElement(ID.RACING_STATUS).innerHTML = this.printResult();
    getElement(ID.RACING_WINNERS).innerHTML = winnersView(this.getWinner());
  }

  onClickRestart() {
    getElement(ID.CAR_NAMES_INPUT).value = '';
    getElement(ID.RACING_COUNT_INPUT).value = '';
    getElement(ID.RACING_WINNERS).innerHTML = '';
    getElement(ID.RACING_STATUS).innerHTML = '';
    this.cars = [];
    this.winners = [];
  }

  printResult() {
    return this.cars.map(car => userStatusView(car)).join('');
  }

  getWinner() {
    const maxCount = getMaxCount(this.cars);
    return (this.winners = this.cars.filter(
      car => car.racingCount === maxCount,
    ));
  }
}

new CarRacing();
