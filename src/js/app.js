import { $ } from './util/dom.js';
import { checkCarNames, getCarNames } from './core/checkCarNames.js';
import { getTryCount } from './core/checkTryCount.js';
import { makeCars, playOneTurn, getWinners } from './core/playRacing.js';
import {
  renderResult,
  renderWinners,
  removeBeforeResult,
} from './view/renderResult.js';

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
      this.setTryCount(getTryCount(e));
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
          renderResult(cars, i, this.tryCount);
          resolve();
        }, 1000);
      });
    }
    renderWinners(getWinners(cars));
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
