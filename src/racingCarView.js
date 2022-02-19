import { SELECTOR } from './common/constants.js';
import { $, $$ } from './common/DOMHelper.js';
import { style } from './common/style.js';

import loadingElement from './common/element.js';
import * as template from './common/template.js';

export default class RacingCarView {
  #carNamesInput;

  #carNamesSubmit;

  #racingCountInput;

  #racingCountSubmit;

  #restart;

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
    this.#carNamesInput = $(SELECTOR.CAR_NAMES_INPUT);
    this.#carNamesSubmit = $(SELECTOR.CAR_NAMES_SUBMIT);
  }

  resetCarNamesInput() {
    this.#carNamesInput.value = '';
    this.#carNamesInput.focus();
  }

  static renderRacingCount() {
    $(SELECTOR.RACING_COUNT).innerHTML = template.racingCountTemplate();
  }

  selectRacingCountDOM() {
    this.#racingCountInput = $(SELECTOR.RACING_COUNT_INPUT);
    this.#racingCountSubmit = $(SELECTOR.RACING_COUNT_SUBMIT);
  }

  static renderCars(cars) {
    $(SELECTOR.GAME_RESULT).innerHTML = template.carsTemplate(cars);
  }

  resetRacingCountInput() {
    this.#racingCountInput.value = '';
    this.#racingCountInput.focus();
  }

  static renderLoading(car) {
    const carNode = RacingCarView.#findCarNode(car.name)[0];
    carNode.append(loadingElement());
  }

  static renderMoveForward(car) {
    const carNode = RacingCarView.#findCarNode(car.name)[0];
    RacingCarView.removeLoading(car);
    carNode.innerHTML += template.moveForwardTemplate();
    RacingCarView.renderLoading(car);
  }

  static #findCarNode(name) {
    const $$moveForwardArrow = $$('.move-forward-arrow');

    return [...$$moveForwardArrow].filter((elem) => elem.dataset.carName === name);
  }

  static removeLoading(car) {
    const carNode = RacingCarView.#findCarNode(car.name)[0];
    [...carNode.children].filter((child) => child.className === 'loading')[0].remove();
  }

  static renderWinners(winners) {
    $(SELECTOR.GAME_RESULT).innerHTML += template.winnersTemplate(winners);
  }

  static renderRestart() {
    $(SELECTOR.GAME_RESULT).innerHTML += template.restartTemplate();
  }

  selectRestartDOM() {
    this.#restart = $(SELECTOR.RESTART);
  }

  renderReset() {
    this.resetCarNamesInput();
    $(SELECTOR.RACING_COUNT).innerHTML = '';
    $(SELECTOR.GAME_RESULT).innerHTML = '';
  }

  $getCarNamesInput() {
    return this.#carNamesInput;
  }

  $getCarNamesSubmit() {
    return this.#carNamesSubmit;
  }

  $getRacingCountInput() {
    return this.#racingCountInput;
  }

  $getRacingCountSubmit() {
    return this.#racingCountSubmit;
  }

  $getRestart() {
    return this.#restart;
  }
}
