import { $, $$ } from '../utils/dom.js';
import { hideElement } from '../utils/attribute.js';
import { SELECTOR } from '../utils/constants.js';
import { carPlayerTemplate, arrowTemplate } from './template.js';

export default class RacingResult {
  constructor() {
    this.initDom();
  }

  initDom() {
    this.$racingStatus = $(SELECTOR.RACING_STATUS);
    this.$finalWinner = $(SELECTOR.FINAL_WINNER);
  }

  renderFinalWinner(finalWinner) {
    this.$finalWinner.innerHTML = `🏆 최종 우승자: ${finalWinner} 🏆`;
  }

  renderRacingStatus(cars) {
    cars.forEach(({ name }) => {
      this.$racingStatus.insertAdjacentHTML('beforeend', carPlayerTemplate(name));
    });
  }

  renderMoveForward(name) {
    $(`${SELECTOR.CAR_PLAYER}[data-car-name=${name}]`).insertAdjacentHTML(
      'afterend',
      arrowTemplate,
    );
  }

  removeSpinner() {
    $$(SELECTOR.SPINNER).forEach((element) => hideElement(element));
  }
}
