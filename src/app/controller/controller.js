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
    this.totalRounds = null;
    this.view = new RacingCarGameView();
    this.carManager = new CarManager();
    this.#initDOM();
    this.#initHandler();
  }

  #initDOM() {
    this.carNameInputField = selectDOM(`#${DOM.CAR_NAME_INPUT_FIELD_ID}`);
    this.countInputField = selectDOM(`#${DOM.COUNT_INPUT_FIELD_ID}`);
    this.gameStartBtn = selectDOM(`#${DOM.GAME_START_BTN_ID}`);
  }

  #initHandler() {
    this.carNameInputField.addEventListener('click', this.onCarNameInputFieldClick);
    this.countInputField.addEventListener('click', this.onCountInputFieldClick);
    this.gameStartBtn.addEventListener('click', this.onGameStartBtnClick);
  }

  onCarNameInputFieldClick = (e) => {
    e.preventDefault();
    const { target: carNameBtn, currentTarget: carNameInputField } = e;
    if (carNameBtn.id === DOM.CAR_NAME_BTN_ID) {
      const carNameInput = selectDOM(`#${DOM.CAR_NAME_INPUT_ID}`, carNameInputField);
      try {
        this.carManager.makeCars(carNameInput.value);
        this.view.renderNameInputSuccess(carNameInput, carNameBtn);
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  onCountInputFieldClick = (e) => {
    e.preventDefault();
    const { target: countBtn, currentTarget: countInputField } = e;
    if (countBtn.id === DOM.COUNT_BTN_ID) {
      const countInput = selectDOM(`#${DOM.COUNT_INPUT_ID}`, countInputField);
      try {
        this.setTotalRounds(countInput.value);
        this.view.renderCountInputSuccess(countInput, countBtn);
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  onGameStartBtnClick = () => {
    this.simulateGame();
  };

  setTotalRounds(countInput) {
    if (isNumberBelowZero(countInput)) {
      throw Error(ERROR_MESSAGE.INVALID_COUNT);
    }
    this.totalRounds = Number(countInput);
  }

  simulateGame() {
    this.view.renderGameStart(this.carManager.cars);
    this.finishedRounds = 0;
    this.gameIntervalId = setInterval(this.simulateRound.bind(this), GAME_ROUND_INTERVAL);
  }

  simulateRound() {
    const movedCars = [];
    this.carManager.cars.forEach((car) => {
      const isMovedCar = RacingCarGameController.processCarRandomMove(car);
      if (isMovedCar) movedCars.push(car.id);
    });
    this.finishedRounds += 1;
    this.view.renderRoundResult(movedCars, this.totalRounds, this.finishedRounds);
    if (this.finishedRounds === this.totalRounds) {
      this.afterGameComplete();
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

  afterRenderComplete() {
    const restartButton = selectDOM(`#${DOM.RESTART_BTN_ID}`);
    restartButton.addEventListener('click', () => window.location.reload());
    this.carNameInputField.removeEventListener('click', this.onCarNameInputFieldClick);
    this.countInputField.removeEventListener('click', this.onCountInputFieldClick);
  }
}
export default RacingCarGameController;
