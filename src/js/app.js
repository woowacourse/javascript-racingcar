import { $ } from './util/dom.js';
import { getCarNames } from './core/checkCarNames.js';
import { getTryCount } from './core/checkTryCount.js';
import { makeCar } from './core/playRacing.js';
import { removeBeforeResult } from './view/renderResult.js';

class app {
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
    });
    $('#app').addEventListener('click', e => removeBeforeResult(e));
  }

  setCarNames(newCarNames) {
    if (newCarNames) {
      this.carNames = newCarNames;
      console.log(this.carNames);
    }
  }

  setTryCount(newTryCount) {
    if (newTryCount) {
      this.tryCount = newTryCount;
      makeCar(this.carNames, this.tryCount);
    }
  }
}

new app();
