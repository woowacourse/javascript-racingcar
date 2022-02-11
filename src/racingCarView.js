import { $ } from './common/DOMHelper.js';
import {
  carsTemplate,
  carNamesTemplate,
  headerTemplate,
  racingCountTemplate,
} from './common/template.js';

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

  renderCars(cars) {
    const $gameResult = $('#game-result');

    $gameResult.innerHTML = carsTemplate(cars);
  }

  selectCarNamesDOM() {
    this.$carNamesInput = $('#car-names-input');
    this.$carNamesSubmit = $('#car-names-submit');
  }

  selectRacingCountDOM() {
    this.$racingCountInput = $('#racing-count-input');
    this.$racingCountSubmit = $('#racing-count-submit');
  }

  resetCarNamesInput() {
    this.$carNamesInput.value = '';
  }

  resetRacingCountInput() {
    this.$racingCountInput.value = '';
  }
}
