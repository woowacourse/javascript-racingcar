import { $, $all } from '../utils/utils.js';
import { SELECTOR } from '../constants.js';
import template from '../templates.js';

import View from './View.js';

export default class RacingProgressView extends View {
  constructor() {
    super();

    this.$racingProgress = $(SELECTOR.$RACING_PROGRESS);
    this.$$progressList = null;
  }

  removeSpinnerAnimation() {
    this.removeElements(this.$$progressList, SELECTOR.$SPINNER);
  }

  renderSpinnerAnimation() {
    this.$$progressList = $all(SELECTOR.$PROGRESS_LIST);

    this.$$progressList.forEach((progress) => {
      this.render(progress, 'beforeend', template.renderLoadingAnimation());
    });
  }

  renderProgressList(index) {
    this.render(
      this.$$progressList[index].querySelector(SELECTOR.$SPINNER),
      'beforebegin',
      template.renderProgressList()
    );
  }

  renderCarList(carList) {
    this.render(
      this.$racingProgress,
      'beforeend',
      template.renderRacingProgress(carList)
    );

    $all(SELECTOR.$CAR_NAME).forEach((carNameElement, index) => {
      this.insertText(carNameElement, carList[index].name);
    });
  }

  init() {
    this.removeElements(this.$racingProgress, SELECTOR.$RACING_PROGRESS_LIST);
  }
}
