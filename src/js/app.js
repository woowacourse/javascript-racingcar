import { $ } from './util/dom.js';
import { getCarNames } from './core/checkCarNames.js';
import { getTryCount } from './core/checkTryCount.js';
import { getGameResult } from './core/playRacing.js';
import { renderResult, removeBeforeResult } from './view/renderResult.js';

class App {
  constructor() {
    this.carNames = [];
    this.tryCount = 0;
    this.mounted();
  }

  mounted() {
    $('#car-names-form').addEventListener('submit', e => {
      this.setCarNames(getCarNames(e));
    });
    $('#try-count-form').addEventListener('submit', e => {
      this.setTryCount(getTryCount(e));
      this.gameStart();
    });
    $('#app').addEventListener('click', e => removeBeforeResult(e));
  }

  isGameReady() {
    return this.carNames.length > 0 && this.tryCount > 0;
  }

  gameStart() {
    if (!this.isGameReady()) {
      return;
    }

    const { cars, winners, maxScore } = getGameResult({
      carNames: this.carNames,
      tryCount: this.tryCount,
    });

    renderResult({ cars, lastTurnCount: maxScore, winners });
    this.resetValue();
  }

  resetValue() {
    $('#car-names-input').value = '';
    $('#try-count-input').value = '';
    this.carNames = [];
    this.tryCount = 0;
  }

  setCarNames(newCarNames) {
    this.carNames = newCarNames;
  }

  setTryCount(newTryCount) {
    this.tryCount = newTryCount;
  }
}

new App();
