import { CAR_NAME_SEPARATOR, DOM, MOVE_CONDITION, RANGE_MAX, RANGE_MIN } from '../lib/constants.js';
import { pickNumberInRange, splitString } from '../lib/utils.js';
import RacingCarGameManager from './manage.js';
import RacingCarGameView from './view.js';

class RacingCarGame {
  constructor() {
    this.view = new RacingCarGameView();
    this.modelManager = new RacingCarGameManager();
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
      try {
        const names = splitString(carNameValue, CAR_NAME_SEPARATOR);
        const cars = RacingCarGameManager.makeCars(names);
        this.modelManager.setCars(cars);
        this.view.renderCountInputForm();
      } catch (error) {
        alert(error);
      }
    }
  };

  onCountInputFieldClick = (e) => {
    e.preventDefault();
    const { target: countBtn, currentTarget: countInputField } = e;
    if (countBtn.id === DOM.COUNT_BTN_ID) {
      const count = countInputField.querySelector(`#${DOM.COUNT_INPUT_ID}`).value;
      try {
        this.modelManager.setCount(count);
        this.simulateGame();
        this.view.renderResults(this.modelManager.getCars(), this.getWinners());
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

  simulateGame() {
    const count = this.modelManager.getCount();
    for (let i = 0; i < count; i += 1) {
      this.simulateRound();
    }
  }

  simulateRound() {
    const cars = this.modelManager.getCars();
    cars.forEach((car) => {
      const random = pickNumberInRange(RANGE_MIN, RANGE_MAX);
      if (random >= MOVE_CONDITION) {
        car.goForward();
      }
    });
  }

  getWinners() {
    const cars = this.modelManager.getCars();
    let max = 0;
    cars.forEach(({ progress }) => {
      max = Math.max(progress, max);
    });
    const winners = cars.reduce(
      (arr, { name, progress }) => (progress === max ? [...arr, name] : [...arr]),
      []
    );
    return winners;
  }
}
export default RacingCarGame;
