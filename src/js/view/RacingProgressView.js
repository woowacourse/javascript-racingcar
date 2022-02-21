import { $, $all } from '../utils/utils.js';
import { SELECTOR, DELAY_TIME } from '../constants.js';
import template from '../templates.js';

import View from './View.js';

export default class RacingProgressView extends View {
  constructor() {
    super();

    this.$racingProgress = $(SELECTOR.$RACING_PROGRESS);
    this.$$progressList = null;
  }

  moveCars(carList, previousCarDistanceList) {
    carList.forEach((car, index) => {
      car.race();

      if (previousCarDistanceList[index] >= car.distance) {
        return;
      }

      previousCarDistanceList[index] = car.distance;
      this.renderProgressList(index);
    });
  }

  renderRacingProgress(racingCount, carList) {
    const startTime = new Date().getTime();
    let repeatCount = 1;
    let previousCarDistanceList = Array(carList.length).fill(0);

    return new Promise((resolve) => {
      const animation = () => {
        const currentTime = new Date().getTime();
        const repeatTime =
          currentTime - DELAY_TIME.RACING_PROGRESS * repeatCount;

        if (repeatTime > startTime) {
          repeatCount++;
          this.moveCars(carList, previousCarDistanceList);
        }

        const requestAnimationFrameId = requestAnimationFrame(animation);

        if (repeatCount > racingCount) {
          cancelAnimationFrame(requestAnimationFrameId);
          resolve();
        }
      };

      requestAnimationFrame(animation);
    });
  }

  removeSpinnerAnimation() {
    this.removeElements(this.$$progressList, SELECTOR.$SPINNER);
  }

  renderSpinnerAnimation() {
    this.$$progressList = $all(SELECTOR.$PROGRESS_LIST);

    this.$$progressList.forEach((progress) => {
      this.render(progress, 'beforeend', template.loadingAnimation);
    });
  }

  renderProgressList(index) {
    this.render(
      this.$$progressList[index].querySelector(SELECTOR.$SPINNER),
      'beforebegin',
      template.progressList
    );
  }

  renderCarList(carList) {
    this.render(
      this.$racingProgress,
      'beforeend',
      template.racingProgress(carList)
    );

    $all(SELECTOR.$CAR_NAME).forEach((carNameElement, index) => {
      this.insertText(carNameElement, carList[index].name);
    });
  }

  init() {
    this.removeElement(this.$racingProgress, SELECTOR.$RACING_PROGRESS_LIST);
  }
}
