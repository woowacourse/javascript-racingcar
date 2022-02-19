import Car from './Car.js';
import { ID, MESSAGE } from './constants.js';
import { getElement } from './utils/dom.js';
import { userMovementView, winnersView } from './view.js';
import {
  parseCarName,
  validateCarNameLength,
  validateDuplicateCarName,
  validateRacingCount,
  moveCars,
  getMaxCount,
  removeAllChildNodes
} from './utils/index.js';

class CarRacing {
  constructor() {
    this.cars = [];
    this.winners = [];
    this.bindEvents();
  }

  bindEvents() {
    getElement(ID.CAR_NAMES_FORM).addEventListener('submit', (event)=>{
      event.preventDefault();
      this.onSubmitCarName(getElement(ID.CAR_NAMES_INPUT).value);
    })

    getElement(ID.RACING_COUNT_FORM).addEventListener('submit', (event)=>{
      event.preventDefault();
      this.onSubmitRacingCount(getElement(ID.RACING_COUNT_INPUT).value);
    })

    getElement(ID.RESTART_BUTTON).addEventListener('click', ()=>{
      this.onClickRestart();
    })
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
    getElement(ID.RACING_COUNT_INPUT).focus();
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
    getElement(ID.RACING_COUNT_INPUT).blur();
    moveCars(this.cars, count);
    getElement(ID.RACING_STATUS).insertAdjacentHTML('afterbegin', this.printResult());
    getElement(ID.RACING_WINNERS).insertAdjacentHTML('afterbegin', winnersView(this.getWinner()));
  }

  onClickRestart() {
    getElement(ID.CAR_NAMES_INPUT).value = '';
    getElement(ID.RACING_COUNT_INPUT).value = '';
    removeAllChildNodes(getElement(ID.RACING_WINNERS));
    removeAllChildNodes(getElement(ID.RACING_STATUS));
    this.cars = [];
    this.winners = [];
  }

  printResult() {
    return this.cars.map(car => userMovementView(car)).join('');
  }

  getWinner() {
    const maxCount = getMaxCount(this.cars);
    return (this.winners = this.cars.filter(
      car => car.racingCount === maxCount,
    ));
  }
}

new CarRacing();
