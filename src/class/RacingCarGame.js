import Car from './Car.js';
import View from './View.js';
import { SELECTOR, MESSAGE, END_MESSAGE_DELAY } from '../constants.js';
import { $, getInputValue, getEnterEvent } from '../utils/dom.js';
import {
  parseCarNames,
  getCarsMovement,
  getWinners,
} from '../utils/racingGame.js';
import {
  isValidCarNameLength,
  isDifferentCarNames,
  isValidRacingCount,
  isInteger,
} from '../utils/validations.js';
import { getTimeInSecond, delayedAlert } from '../utils/general.js';

export default class RacingCarGame {
  constructor() {
    this.$app = $(SELECTOR.APP);
    this.cars = [];
    this.winners = [];
    this.view = new View();
    this.bindEvents();
  }

  bindEvents() {
    const carNamesInput = $(SELECTOR.CAR_NAMES_INPUT, this.$app);
    const racingCountInput = $(SELECTOR.RACING_COUNT_INPUT, this.$app);

    $(SELECTOR.CAR_NAMES_BUTTON, this.$app).addEventListener('click', () =>
      this.onSubmitCarName(getInputValue(carNamesInput)),
    );
    $(SELECTOR.RACING_COUNT_BUTTON, this.$app).addEventListener('click', () =>
      this.onSubmitRacingCount(+getInputValue(racingCountInput)),
    );
    $(SELECTOR.RESTART_BUTTON, this.$app).addEventListener('click', () =>
      this.onClickRestart(),
    );
    carNamesInput.addEventListener('keyup', ({ key, target }) =>
      getEnterEvent(key, () => this.onSubmitCarName(target.value)),
    );
    racingCountInput.addEventListener('keyup', ({ key, target }) =>
      getEnterEvent(key, () => this.onSubmitRacingCount(+target.value)),
    );
  }

  onSubmitCarName(names) {
    const parsedNames = parseCarNames(names);
    if (!isValidCarNameLength(parsedNames)) {
      return alert(MESSAGE.WRONG_NAME_LENGTH);
    }
    if (!isDifferentCarNames(parsedNames)) {
      return alert(MESSAGE.DUPLICATE_NAME);
    }
    this.cars = parsedNames.map(name => new Car(name));
    this.view.showRacingCountInput();
  }

  onSubmitRacingCount(count) {
    if (!isValidRacingCount(count)) {
      return alert(MESSAGE.WRONG_COUNT);
    }
    if (!isInteger(count)) {
      return alert(MESSAGE.NOT_DECIMAL_COUNT);
    }
    this.startGame(count);
  }

  onClickRestart() {
    this.cars = [];
    this.winners = [];
    this.view.restartGame();
  }

  startGame(count) {
    this.view.renderRacingStatus(this.cars);
    this.progressGame(count);
  }

  endGame() {
    this.winners = getWinners(this.cars);
    this.view.endGame(this.winners);
    delayedAlert(MESSAGE.GAME_END, END_MESSAGE_DELAY);
  }

  progressGame(count) {
    let start = 0;
    let before = 0;
    let isLoading = true;

    const progressBySecond = timestamp => {
      const timeInSecond = getTimeInSecond(timestamp);
      if (!start) {
        start = timeInSecond;
      }
      const progress = timeInSecond - start;
      if (progress === count) {
        this.endGame();
        return;
      }
      if (isLoading) {
        this.view.renderSpinners();
        isLoading = false;
      }
      if (before !== progress) {
        this.view.renderRacingProgress(getCarsMovement(this.cars));
        before = progress;
        isLoading = true;
      }
      window.requestAnimationFrame(progressBySecond);
    };
    window.requestAnimationFrame(progressBySecond);
  }
}
