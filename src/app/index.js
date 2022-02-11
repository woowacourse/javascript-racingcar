import {
  CAR_NAME_SEPARATOR,
  DOM,
  ERROR_MESSAGE,
  MOVE_CONDITION,
  RANGE_MAX,
  RANGE_MIN,
} from '../lib/constants.js';
import { isNumberBelowZero, pickNumberInRange, splitString } from '../lib/utils.js';
import Car from './car.js';
import RacingCarGameView from './view.js';

class RacingCarGame {
  constructor() {
    this.cars = null;
    this.count = null;
    this.view = new RacingCarGameView();
    this.initDOM();
    this.initHandler();
  }

  initDOM() {
    this.carNameInputField = document.querySelector(`#${DOM.CAR_NAME_INPUT_FIELD_ID}`);
    this.countInputField = document.querySelector(`#${DOM.COUNT_INPUT_FIELD_ID}`);
  }

  initHandler() {
    this.carNameInputField.addEventListener('click', this.onCarNameInputFieldClick);
    this.countInputField.addEventListener('click', this.onCountInputFieldClick);
  }

  onCarNameInputFieldClick = (e) => {
    e.preventDefault();
    const { target: carNameBtn, currentTarget: carNameInputField } = e;
    if (carNameBtn.id === DOM.CAR_NAME_BTN_ID) {
      const carNameValue = carNameInputField.querySelector(`#${DOM.CAR_NAME_INPUT_ID}`).value;
      const names = splitString(carNameValue, CAR_NAME_SEPARATOR);
      this.makeCars(names);
      this.view.renderCountInputForm();
    }
  };

  onCountInputFieldClick = (e) => {
    e.preventDefault();
    const { target: countBtn, currentTarget: countInputField } = e;
    if (countBtn.id === DOM.COUNT_BTN_ID) {
      const count = countInputField.querySelector(`#${DOM.COUNT_INPUT_ID}`).value;
      try {
        this.setCount(count);
        this.simulateGame();
        this.view.renderResults(this.cars, this.getWinners());
        this.afterRenderComplete();
      } catch (error) {
        alert(error);
      }
    }
  };

  afterRenderComplete() {
    this.view.disableInputButtons();

    const restartButton = document.querySelector(`#${DOM.RESTART_BTN_ID}`);
    restartButton.addEventListener('click', () => window.location.reload());
    this.carNameInputField.removeEventListener('click', this.onCarNameInputFieldClick);
    this.countInputField.removeEventListener('click', this.onCountInputFieldClick);
  }

  setCount(count) {
    if (isNumberBelowZero(count)) {
      throw Error(ERROR_MESSAGE.INVALID_COUNT);
    }
    this.count = count;
  }

  makeCars(names) {
    try {
      this.cars = names.map((name) => new Car(name));
    } catch (error) {
      alert(error);
    }
  }

  simulateGame() {
    for (let i = 0; i < this.count; i += 1) {
      this.simulateRound();
    }
  }

  simulateRound() {
    this.cars.forEach((car) => {
      const random = pickNumberInRange(RANGE_MIN, RANGE_MAX);
      if (random >= MOVE_CONDITION) {
        car.goForward();
      }
    });
  }

  getWinners() {
    let max = 0;
    this.cars.forEach(({ progress }) => {
      max = Math.max(progress, max);
    });
    const winners = this.cars.reduce(
      (arr, { name, progress }) => (progress === max ? [...arr, name] : [...arr]),
      []
    );
    return winners;
  }
}
export default RacingCarGame;
