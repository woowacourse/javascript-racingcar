import { $, $$ } from '../utils/dom.js';
import Model from '../model/model.js';
import View from '../view/view.js';
import { getRandomNumber } from '../utils/getValues.js';
import Validator from '../validator/validator.js';
import { ERROR_MESSAGE, NUMBER, RESULT, SELECTOR, TIMER } from '../utils/constants.js';
import { delay } from '../utils/timer.js';

export default class Controller {
  constructor() {
    this.model = new Model();
    this.view = new View();
    this.bindCarNamesEvent();
    this.bindRacingCountEvent();
  }

  splitCarNamesInput() {
    return $(SELECTOR.CAR_NAMES_INPUT)
      .value.split(',')
      .map((carName) => carName.trim());
  }

  bindCarNamesEvent() {
    $(SELECTOR.CAR_NAMES_BUTTON).addEventListener('click', (e) => {
      if (Validator.isInValidCarNamesInput(this.splitCarNamesInput())) {
        alert(ERROR_MESSAGE.INVALID_CAR_NAME);
        return;
      }
      this.model.saveCars(this.splitCarNamesInput());
      this.model.initCarPosition();
      this.view.renderCarRacingInputBox();
    });
  }

  getRacingCountInput() {
    return $(SELECTOR.CAR_RACING_COUNT_INPUT).value;
  }

  bindRacingCountEvent() {
    $(SELECTOR.CAR_RACING_COUNT_BUTTON).addEventListener('click', (e) => {
      if (Validator.isInValidRacingCountInput(this.getRacingCountInput())) {
        alert(ERROR_MESSAGE.INVALID_RACING_COUNT);
        return;
      }
      this.view.disableButtons();
      this.model.saveRacingCount(this.getRacingCountInput());
      this.gameStart();
      this.model.initCarPosition();
    });
  }

  moveWhileRacingCount() {
    for (let i = 0; i < this.model.racingCount; i++) {
      this.moveCars();
    }
  }

  isMoveCondition() {
    return getRandomNumber() >= NUMBER.MOVE_CONDITION;
  }

  goForward(idx) {
    if (this.isMoveCondition()) {
      this.model.goForward(idx);
    }
  }

  moveCars() {
    this.model.carNames.forEach((carNames, idx) => {
      this.goForward(idx);
    });
  }

  async gameStart() {
    this.view.renderCarNames(this.model.carNames);
    this.moveWhileRacingCount();
    const winnerList = this.getWinnerList();
    await this.displayProgress(this.model.carPosition);
    this.displayWinner(winnerList);
    this.displayRestartButton();
    this.bindGameRestartEvent();
    await delay(TIMER.DELAY_AFTER_END);
    alert(RESULT.RACE_RESULT);
  }

  displayProgress() {
    return this.view.renderProgress(this.model.carPosition);
  }

  displayRestartButton() {
    this.view.renderRestartButton();
  }

  getWinner(maxDistance) {
    return this.model.carNames.filter((car, idx) => this.model.carPosition[idx] === maxDistance);
  }

  getMaxDistance() {
    return Math.max.apply(null, [...this.model.carPosition]);
  }

  getWinnerList() {
    return this.getWinner(this.getMaxDistance()).join(', ');
  }

  displayWinner(winnerList) {
    this.view.renderWinner(winnerList);
  }

  bindGameRestartEvent() {
    $(SELECTOR.GAME_RESTART).addEventListener('click', (e) => {
      this.view.renderInitial();
      this.model = new Model();
    });
  }
}
