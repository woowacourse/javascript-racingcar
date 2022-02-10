import { $ } from './util/dom.js';
import { getCarNames } from './checkCarNames.js';
import { getTryCount } from './checkTryCount.js';

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
      console.log(this.tryCount);
    }
  }
}

new app();
