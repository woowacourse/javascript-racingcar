import { CAR, SELECTOR } from './common/constants.js';
import { $, $$ } from './common/DOMHelper.js';
import { style } from './common/style.js';
import * as template from './common/template.js';

export default class RacingCarView {
  constructor() {
    this.$app = $('#app');
    RacingCarView.init();
  }

  static init() {
    document.head.innerHTML += style;
  }

  renderHeader() {
    this.$app.innerHTML = template.headerTemplate();
  }

  renderCarNames() {
    this.$app.innerHTML += template.carNamesTemplate();
  }

  selectCarNamesDOM() {
    this.$carNamesInput = $(SELECTOR.CAR_NAMES_INPUT);
    this.$carNamesSubmit = $(SELECTOR.CAR_NAMES_SUBMIT);
  }

  resetCarNamesInput() {
    this.$carNamesInput.value = '';
  }

  static renderRacingCount() {
    $(SELECTOR.RACING_COUNT).innerHTML = template.racingCountTemplate();
  }

  selectRacingCountDOM() {
    this.$racingCountInput = $(SELECTOR.RACING_COUNT_INPUT);
    this.$racingCountSubmit = $(SELECTOR.RACING_COUNT_SUBMIT);
  }

  static renderCars(cars) {
    $(SELECTOR.GAME_RESULT).innerHTML = template.carsTemplate(cars);
  }

  resetRacingCountInput() {
    this.$racingCountInput.value = '';
  }

  static renderMoveForwardArrow(car) {
    const { name, moveCount } = car;
    const carNode = RacingCarView.#findCarNode(name)[0];

    for (let i = 0; i < moveCount; i += 1) {
      carNode.innerHTML += `<p>${CAR.MOVE_FORWARD_ARROW}</p>`;
    }
  }

  static #findCarNode(name) {
    const $$moveForwardArrow = $$('.move-forward-arrow');

    return [...$$moveForwardArrow].filter((elem) => elem.dataset.carName === name);
  }

  static renderWinners(winners) {
    $(SELECTOR.GAME_RESULT).innerHTML += template.winnersTemplate(winners);
  }

  static renderRestart() {
    $(SELECTOR.GAME_RESULT).innerHTML += template.restartTemplate();
  }

  selectRestartDOM() {
    this.$restart = $(SELECTOR.RESTART);
  }

  renderReset() {
    this.resetCarNamesInput();
    $(SELECTOR.RACING_COUNT).innerHTML = '';
    $(SELECTOR.GAME_RESULT).innerHTML = '';
  }
}
