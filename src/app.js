import { $ } from './util/dom.js';
import { getCarNames } from './checkCarNames.js';

class app {
  constructor() {
    this.mounted();
  }

  mounted() {
    $('#car-names-form').addEventListener('submit', getCarNames.bind());
  }
}

new app();
