import { $ } from './util/dom.js';
import { getCarNames } from './checkCarNames.js';
import { getTryCount } from './checkTryCount.js';

class app {
  constructor() {
    this.carNames = [];
    this.mounted();
  }

  mounted() {
    $('#car-names-form').addEventListener('submit', e =>
      this.setCarNames(getCarNames(e)),
    );
    $('#try-count-form').addEventListener('submit', e => getTryCount(e));
  }

  setCarNames(newCarNames) {
    if (newCarNames) this.carNames = newCarNames;
  }
}

new app();
