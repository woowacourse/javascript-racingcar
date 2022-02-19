import { $, $$ } from './common/DOMHelper.js';
import {
  carsTemplate,
  carNamesTemplate,
  headerTemplate,
  racingCountTemplate,
  racingProgressTemplate,
  restartTemplate,
  winnersTemplate,
} from './common/template.js';

import { style } from './common/style.js';

export default class RacingCarView {
  constructor() {
    this.init();
  }

  init() {
    this.$app = $('#app');

    document.head.innerHTML += style;
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

  selectRestartDOM() {
    this.$restart = $('#restart');
  }

  resetCarNamesInput() {
    this.$carNamesInput.value = '';
  }

  resetRacingCountInput() {
    this.$racingCountInput.value = '';
  }

  renderMoveForwardArrow(car) {
    const carNode = this.#findCarNode(car.name)[0];
    carNode.innerHTML += racingProgressTemplate();
  }

  #findCarNode(name) {
    const $$moveForwardArrow = $$('.move-forward-arrow');

    return [...$$moveForwardArrow].filter((elem) => elem.dataset.carName === name);
  }

  renderWinners(winners) {
    const $gameResult = $('#game-result');

    $gameResult.innerHTML += winnersTemplate(winners);
  }

  renderRestart() {
    const $gameResult = $('#game-result');

    $gameResult.innerHTML += restartTemplate();
  }

  renderInit() {
    this.resetCarNamesInput();

    const $racingCount = $('#racing-count');
    const $gameResult = $('#game-result');
    $racingCount.innerHTML = '';
    $gameResult.innerHTML = '';
  }
}
