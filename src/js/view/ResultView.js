import { CLASS } from '../utils/constants.js';
import View from './View.js';

export default class ResultView extends View {
  renderCarNames = (carNames) => {
    this.insertTemplate(this.makeCarNamesTemplate(carNames));
  };

  makeCarNamesTemplate = (carNames) => `
      <div class="${CLASS.RACING_RESULTS}">
    ${carNames
      .map(
        (carName) => `
        <div id="${carName}-container" class=${CLASS.RACING_INFO}>
          <div data-name="${carName}" class="${CLASS.CAR_NAME}">${carName}</div>
          <div class=${CLASS.LOADING}><div class=${CLASS.SPINNER}></div></div>
        </div>
      `,
      )
      .join('')}
      </div>
      `;

  renderArrows = (stageResult) => {
    Object.entries(stageResult).forEach(([name, isMoved]) => {
      if (isMoved) {
        this.element
          .querySelector(`.${CLASS.CAR_NAME}[data-name="${name}"]`)
          .insertAdjacentHTML('afterend', `<div class=${CLASS.ARROW}>⬇️</div>`);
      }
    });
  };

  reset = () => {
    this.element.innerHTML = '';
  };

  removeSpinners = () => {
    this.element.querySelectorAll(`.${CLASS.LOADING}`).forEach((element) => element.remove());
  };
}
