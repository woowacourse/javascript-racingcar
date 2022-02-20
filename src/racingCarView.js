import { $, $$ } from './common/DOMHelper.js';
import { DELAY, SELECTOR, SPINNER_SPEED } from './common/constants.js';
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
    this.$app = $(SELECTOR.APP);

    document.head.innerHTML += style;
  }

  renderHeader() {
    this.$app.innerHTML = headerTemplate();
  }

  renderCarNames() {
    this.$app.innerHTML += carNamesTemplate();
  }

  renderRacingCount() {
    const $racingCount = $(SELECTOR.RACING_COUNT);

    $racingCount.innerHTML = racingCountTemplate();
  }

  renderCars(cars) {
    const $gameResult = $(SELECTOR.GAME_RESULT);

    $gameResult.innerHTML = carsTemplate(cars);
  }

  selectCarNamesDOM() {
    this.$carNamesInput = $(SELECTOR.CAR_NAMES_INPUT);
    this.$carNamesSubmit = $(SELECTOR.CAR_NAMES_SUBMIT);
  }

  selectRacingCountDOM() {
    this.$racingCountInput = $(SELECTOR.RACING_COUNT_INPUT);
    this.$racingCountSubmit = $(SELECTOR.RACING_COUNT_SUBMIT);
  }

  selectRestartDOM() {
    this.$restart = $(SELECTOR.RESTART);
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
    const $$moveForwardArrow = $$(SELECTOR.MOVE_FORWARD_ARROW);

    return [...$$moveForwardArrow].filter((elem) => elem.dataset.carName === name);
  }

  renderWinners(winners) {
    const $gameResult = $(SELECTOR.GAME_RESULT);

    $gameResult.innerHTML += winnersTemplate(winners);
  }

  renderCelebration(winners) {
    alert(`${winners.join(', ')} 우승 축하드립니다😀`);
  }

  renderRestart() {
    const $gameResult = $(SELECTOR.GAME_RESULT);

    $gameResult.innerHTML += restartTemplate();
  }

  renderInit() {
    this.resetCarNamesInput();

    const $racingCount = $(SELECTOR.RACING_COUNT);
    const $gameResult = $(SELECTOR.GAME_RESULT);
    $racingCount.innerHTML = '';
    $gameResult.innerHTML = '';
  }

  showSpinners() {
    const $$spinner = $$(SELECTOR.SPINNER);

    [...$$spinner].forEach((spinner) => {
      spinner.classList.remove('hidden');
      this.#animateSpinner(spinner);
    });
  }

  hideSpinners() {
    const $$spinner = $$(SELECTOR.SPINNER);

    [...$$spinner].forEach((spinner) => {
      spinner.classList.add('hidden');
    });
  }

  #animateSpinner(spinner) {
    const startTime = new Date().getTime();
    let i = 0;

    const animatedSpinner = () => {
      const currentTime = new Date().getTime();
      i += SPINNER_SPEED;
      spinner.style.transform = `rotate(${i}deg)`;

      if (currentTime - DELAY.RACE_INTERVAL > startTime) return;

      requestAnimationFrame(animatedSpinner);
    };
    requestAnimationFrame(animatedSpinner);
  }
}
