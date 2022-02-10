import { $ } from './util/dom.js';
import { checkCarNames } from './checkCarNames.js';

class app {
  constructor() {
    this.mounted();
  }

  mounted() {
    $('#car-names-form').addEventListener('submit', checkCarNames.bind());
  }
}

new app();
