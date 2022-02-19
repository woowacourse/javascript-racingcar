import {
  DOM,
  ERROR_MESSAGE,
  GAME_ROUND_INTERVAL,
  MOVE_CONDITION,
  RANGE_MAX,
  RANGE_MIN,
} from '../../lib/constants.js';
import { isNumberBelowZero, pickNumberInRange, selectDOM } from '../../lib/utils.js';
import CarManager from '../model/carManager.js';
import RacingCarGameView from '../view/view.js';

class RacingCarGameController {
  start() {
    this.view = new RacingCarGameView();
    this.carManager = new CarManager();
    this.#initDOM();
    this.#initHandler();
  }

  #initDOM() {
    this.inputField = selectDOM(`#${DOM.INPUT_FIELD_ID}`);
  }

  #initHandler() {
    this.inputField.addEventListener('click', this.#onInputFieldClick);
  }

  #onInputFieldClick = (e) => {
    e.preventDefault();
    const { target } = e;

    if (target.id === DOM.CAR_NAME_BTN_ID) {
      this.#onCarNameInputFieldClick(target);
    }
    if (target.id === DOM.COUNT_BTN_ID) {
      this.#onCountInputFieldClick(target);
    }
    if (target.id === DOM.GAME_START_BTN_ID) {
      this.#simulateGame();
    }
  };

  #onCarNameInputFieldClick = (target) => {
    const carNameInput = selectDOM(`#${DOM.CAR_NAME_INPUT_ID}`, this.inputField);
    try {
      this.carManager.makeCars(carNameInput.value);
      this.view.renderNameInputSuccess(carNameInput, target);
    } catch ({ message }) {
      alert(message);
    }
  };

  #onCountInputFieldClick = (target) => {
    const countInput = selectDOM(`#${DOM.COUNT_INPUT_ID}`, this.inputField);
    try {
      this.#setTotalRounds(countInput.value);
      this.view.renderCountInputSuccess(countInput, target);
    } catch ({ message }) {
      alert(message);
    }
  };

  #setTotalRounds(countInput) {
    if (isNumberBelowZero(countInput)) {
      throw Error(ERROR_MESSAGE.INVALID_COUNT);
    }
    this.totalRounds = Number(countInput);
  }

  #simulateGame() {
    this.view.renderGameStart(this.carManager.cars);
    this.finishedRounds = 0;
    this.gameIntervalId = setInterval(this.#simulateRound.bind(this), GAME_ROUND_INTERVAL);
  }

  #simulateRound() {
    const movedCars = [];
    this.carManager.cars.forEach((car) => {
      const isMovedCar = RacingCarGameController.processCarRandomMove(car);
      if (isMovedCar) movedCars.push(car.id);
    });
    this.finishedRounds += 1;
    const isGameOver = this.totalRounds === this.finishedRounds;
    this.view.renderRoundResult(movedCars, isGameOver);
    if (isGameOver) {
      this.#afterGameComplete();
    }
  }

  static processCarRandomMove(car) {
    const random = pickNumberInRange(RANGE_MIN, RANGE_MAX);
    if (random >= MOVE_CONDITION) {
      car.goForward();
      return true;
    }
    return false;
  }

  #afterGameComplete() {
    clearInterval(this.gameIntervalId);
    this.view.renderGameResults(this.#getWinners());
    this.#afterRenderComplete();
  }

  #getWinners() {
    const max = Math.max(...this.carManager.cars.map((car) => car.progress));
    const winners = this.carManager.cars.reduce(
      (arr, { name, progress }) => (progress === max ? [...arr, name] : [...arr]),
      []
    );
    return winners;
  }

  #afterRenderComplete() {
    const restartButton = selectDOM(`#${DOM.RESTART_BTN_ID}`);
    restartButton.addEventListener('click', () => window.location.reload());
    this.inputField.removeEventListener('click', this.#onInputFieldClick);
  }
}
export default RacingCarGameController;
