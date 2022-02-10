import { $ } from './common/DOMHelper.js';
import { headerTemplate, carNamesTemplate, racingCountTemplate } from './common/template.js';

export default class RacingCarView {
  constructor() {
    this.$app = $('#app');
  }

  renderHeader() {
    this.$app.innerHTML = headerTemplate();
  }

  renderCarNames() {
    this.$app.innerHTML += carNamesTemplate();
  }

  renderRacingCount() {
    const $racingCount = $('#racing-count');

    $racingCount.innerHTML = racingCountTemplate();
  }

  selectCarNamesDOM() {
    this.$carNamesInput = $('#car-names-input');
    this.$carNamesSubmit = $('#car-names-submit');
  }

  selectRacingCountDOM() {}
}
