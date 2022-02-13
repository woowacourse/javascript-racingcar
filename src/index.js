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
  resetCars,
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
    getElement(ID.CAR_NAMES_INPUT).value = '';
    getElement(ID.RACING_COUNT_INPUT).value = '';
    getElement(ID.RACING_WINNERS).innerHTML = '';
    getElement(ID.RACING_STATUS).innerHTML = '';
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
    getElement(ID.RACING_STATUS).innerHTML = this.cars
      .map(car => userStatusView(car))
      .join('');
    getElement(ID.RACING_WINNERS).innerHTML = winnersView(this.getWinner());
  }
}

new CarRacing();
