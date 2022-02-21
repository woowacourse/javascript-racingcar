import { CLASS } from '../constant/index.js';
import { makeCarNamesTemplate } from '../utils/template.js';
import View from './View.js';

export default class ResultView extends View {
  renderCarNames(carNames) {
    this.insertTemplate(makeCarNamesTemplate(carNames));
  }

  renderArrows(stageResult) {
    Object.entries(stageResult).forEach(([name, isMoved]) => {
      if (isMoved) {
        this.element
          .querySelector(`.${CLASS.CAR_NAME}[data-name="${name}"]`)
          .insertAdjacentHTML('afterend', `<div class=${CLASS.ARROW}>⬇️</div>`);
      }
    });
  }

  reset() {
    this.element.innerHTML = '';
  }

  removeSpinners() {
    this.element
      .querySelectorAll(`.${CLASS.LOADING}`)
      .forEach((element) => element.remove());
  }
}
