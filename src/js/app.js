import { $ } from './util/dom.js';
import { checkCarNames, getCarNames } from './core/checkCarNames.js';
import { getTryCount, checkTryCount } from './core/checkTryCount.js';

import {
  makeCars,
  playOneTurn,
  getWinners,
  isLastTurn,
} from './core/playRacing.js';

import {
  renderResult,
  renderWinners,
  removeBeforeResult,
} from './view/renderResult.js';

import {
  TURN_LOADING_DELAY,
  WINNERS_ALERT_DELAY,
} from './constants/constant.js';

class App {
  constructor() {
    this.carNames = [];
    this.tryCount = 0;
    this.handleEvent();
  }

  handleEvent() {
    $('#car-names-form').addEventListener('submit', e => {
      this.setCarNames(checkCarNames(getCarNames(e)));
    });
    $('#try-count-form').addEventListener('submit', e => {
      this.setTryCount(checkTryCount(getTryCount(e)));
    });
    $('#try-count-form').addEventListener('submit', () => {
      this.startGame();
    });
    $('#app').addEventListener('click', e => removeBeforeResult(e));
  }

  async startGame() {
    let cars = makeCars(this.carNames);
    for (let i = 0; i < this.tryCount; i++) {
      playOneTurn(cars, i);
      await new Promise(resolve => {
        setTimeout(() => {
          renderResult(cars, isLastTurn(i, this.tryCount));
          resolve();
        }, TURN_LOADING_DELAY);
      });
    }
    renderWinners(getWinners(cars));
    setTimeout(() => {
      window.alert('축하의 메시지');
    }, WINNERS_ALERT_DELAY);
    this.resetValue();
  }

  resetValue() {
    $('#car-names-input').value = '';
    $('#try-count-input').value = '';
    this.carNames = [];
    this.tryCount = 0;
  }

  setCarNames(newCarNames) {
    if (newCarNames) {
      this.carNames = newCarNames;
    }
  }

  setTryCount(newTryCount) {
    if (newTryCount) {
      this.tryCount = newTryCount;
    }
  }
}

new App();
