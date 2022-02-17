import {
  CAR_NAME_SEPARATOR,
  DOM,
  ERROR_MESSAGE,
  MOVE_CONDITION,
  RANGE_MAX,
  RANGE_MIN,
} from '../lib/constants.js';
import { isNumberBelowZero, pickNumberInRange, selectDOM, splitString } from '../lib/utils.js';
import CarManager from './carManager.js';
import RacingCarGameView from './view.js';

class RacingCarGame {
  constructor() {
    this.count = null;
    this.view = new RacingCarGameView();
    this.carManager = new CarManager();
    this.initDOM();
    this.initHandler();
  }

  initDOM() {
    this.carNameInputField = selectDOM(`#${DOM.CAR_NAME_INPUT_FIELD_ID}`);
    this.countInputField = selectDOM(`#${DOM.COUNT_INPUT_FIELD_ID}`);
  }

  initHandler() {
    this.carNameInputField.addEventListener('click', this.onCarNameInputFieldClick);
    this.countInputField.addEventListener('click', this.onCountInputFieldClick);
  }

  onCarNameInputFieldClick = (e) => {
    e.preventDefault();
    const { target: carNameBtn, currentTarget: carNameInputField } = e;
    if (carNameBtn.id === DOM.CAR_NAME_BTN_ID) {
      const carNameValue = selectDOM(`#${DOM.CAR_NAME_INPUT_ID}`, carNameInputField).value;
      try {
        const names = splitString(carNameValue, CAR_NAME_SEPARATOR);
        this.carManager.makeCars(names);
        this.view.renderCountInputForm();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  onCountInputFieldClick = (e) => {
    e.preventDefault();
    const { target: countBtn, currentTarget: countInputField } = e;
    if (countBtn.id === DOM.COUNT_BTN_ID) {
      const count = selectDOM(`#${DOM.COUNT_INPUT_ID}`, countInputField).value;
      try {
        this.setCount(count);
        this.simulateGame();
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  afterRenderComplete() {
    this.view.disableInputButtons();

    const restartButton = selectDOM(`#${DOM.RESTART_BTN_ID}`);
    restartButton.addEventListener('click', () => window.location.reload());
    this.carNameInputField.removeEventListener('click', this.onCarNameInputFieldClick);
    this.countInputField.removeEventListener('click', this.onCountInputFieldClick);
  }

  setCount(count) {
    if (isNumberBelowZero(count)) {
      throw Error(ERROR_MESSAGE.INVALID_COUNT);
    }
    this.count = Number(count);
  }

  simulateGame() {
    this.view.renderGameStart(this.carManager.cars);
    this.finishedCount = 0;
    this.gameIntervalId = setInterval(this.simulateRound.bind(this), 1000);
  }

  simulateRound() {
    const moved = [];
    this.carManager.cars.forEach((car) => RacingCarGame.processCarRandomMove(car, moved));
    this.finishedCount += 1;
    this.view.renderRoundResult(moved, this.count, this.finishedCount);
    if (this.finishedCount === this.count) {
      this.afterGameComplete();
    }
  }

  static processCarRandomMove(car, moved) {
    const random = pickNumberInRange(RANGE_MIN, RANGE_MAX);
    if (random >= MOVE_CONDITION) {
      car.goForward();
      moved.push(car.id);
    }
  }

  afterGameComplete() {
    clearInterval(this.gameIntervalId);
    this.view.renderGameResults(this.getWinners());
    this.afterRenderComplete();
  }

  getWinners() {
    const max = Math.max(...this.carManager.cars.map((car) => car.progress));
    const winners = this.carManager.cars.reduce(
      (arr, { name, progress }) => (progress === max ? [...arr, name] : [...arr]),
      []
    );
    return winners;
  }
}
export default RacingCarGame;
