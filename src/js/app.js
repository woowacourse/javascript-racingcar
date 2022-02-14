import { $ } from './util/dom.js';
import { getCarNames } from './core/checkCarNames.js';
import { getTryCount } from './core/checkTryCount.js';
import { makeCar, playOneTurn, getWinners } from './core/playRacing.js';
import { renderResult, removeBeforeResult } from './view/renderResult.js';

class App {
  constructor() {
    this.carNames = [];
    this.tryCount = 0;
    this.handleEvent();
  }

  handleEvent() {
    $('#car-names-form').addEventListener('submit', e => {
      this.setCarNames(getCarNames(e));
    });
    $('#try-count-form').addEventListener('submit', e => {
      this.setTryCount(getTryCount(e));
    });
    $('#try-count-form').addEventListener('submit', () => {
      this.startGame();
    });
    $('#app').addEventListener('click', e => removeBeforeResult(e));
  }

  startGame() {
    const cars = makeCar(this.carNames);
    for (let i = 0; i < this.tryCount; i++) {
      playOneTurn(cars);
      renderResult(cars);
    }
    getWinners(cars);
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
