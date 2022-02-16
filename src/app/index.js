import {
  CAR_NAME_SEPARATOR,
  DOM,
  ID_PREFIX,
  MOVE_CONDITION,
  RANGE_MAX,
  RANGE_MIN,
} from '../lib/constants.js';
import { findElement, pickNumberInRange, sleep, splitString } from '../lib/utils.js';
import RacingCarGameManager from './manager.js';
import RacingCarGameView from './view.js';

class RacingCarGame {
  start() {
    this.#init();
  }

  #init() {
    this.view = new RacingCarGameView();
    this.modelManager = new RacingCarGameManager();
    this.#initDOM();
    this.#bindHandler();
  }

  #initDOM() {
    this.carNameInputField = findElement(ID_PREFIX, DOM.CAR_NAME_INPUT_FIELD);
    this.countInputField = findElement(ID_PREFIX, DOM.COUNT_INPUT_FIELD);
    this.restartButton = findElement(ID_PREFIX, DOM.RESTART_BTN);
  }

  #bindHandler() {
    this.carNameInputField.addEventListener('click', this.onCarNameInputFieldClick);
    this.countInputField.addEventListener('click', this.onCountInputFieldClick);
    this.restartButton.addEventListener('click', this.onRestartButtonClick);
  }

  onCarNameInputFieldClick = (e) => {
    e.preventDefault();
    const { target: carNameBtn, currentTarget: carNameInputField } = e;
    if (carNameBtn.id === DOM.CAR_NAME_BTN) {
      const carNameValue = carNameInputField.querySelector(DOM.CAR_NAME_INPUT.toID()).value;
      this.triggerActionAfterCarNameInput(carNameValue);
    }
  };

  triggerActionAfterCarNameInput(carNameValue) {
    try {
      const names = splitString(carNameValue, CAR_NAME_SEPARATOR);
      const cars = RacingCarGameManager.makeCars(names);
      this.modelManager.setCars(cars);
      this.view.renderCountInputForm();
    } catch (error) {
      alert(error);
    }
  }

  onCountInputFieldClick = (e) => {
    e.preventDefault();
    const { target: countBtn, currentTarget: countInputField } = e;
    if (countBtn.id === DOM.COUNT_BTN) {
      const count = countInputField.querySelector(DOM.COUNT_INPUT.toID()).value;
      // 로직의 마지막이기 때문에 동기 처리 안함.
      this.triggerActionAfterCountInput(count);
    }
  };

  async triggerActionAfterCountInput(count) {
    try {
      this.modelManager.setCount(count);
      this.view.renderInitialGameState(this.modelManager.getCars());
      await this.simulateGame();
      this.view.renderResults(this.getWinners());
      this.afterRenderComplete();
    } catch (error) {
      alert(error);
    }
  }

  async simulateGame() {
    const count = this.modelManager.getCount();
    for (let i = 0; i < count; i += 1) {
      setTimeout(() => {
        this.simulateRound();
      }, 1000 * i);
    }
    await sleep(count);
  }

  simulateRound() {
    const cars = this.modelManager.getCars();
    cars.forEach((car) => {
      const random = pickNumberInRange(RANGE_MIN, RANGE_MAX);
      if (random >= MOVE_CONDITION) {
        car.goForward();
        this.view.renderGoForward(car);
      }
    });
  }

  getWinners() {
    const cars = this.modelManager.getCars();
    const max = Math.max(...cars.map(({ progress }) => progress));
    const winners = cars.reduce(
      (arr, { name, progress }) => (progress === max ? [...arr, name] : [...arr]),
      [],
    );
    return winners;
  }

  afterRenderComplete() {
    this.view.disableInputButtons();
    this.carNameInputField.removeEventListener('click', this.onCarNameInputFieldClick);
    this.countInputField.removeEventListener('click', this.onCountInputFieldClick);
  }

  onRestartButtonClick = () => {
    this.#init();
  };
}
export default RacingCarGame;
