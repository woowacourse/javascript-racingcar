import { CLASS } from '../utils/constants.js';
import { $ } from '../utils/selector.js';
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
          <div class="${CLASS.CAR_NAME}">${carName}</div>
        </div>
      `,
      )
      .join('')}
      </div>
      `;

  renderArrows = (stageResult) => {
    Object.entries(stageResult).forEach(([name, isMoved]) => {
      if (isMoved) {
        $(`#${name}-container`).insertAdjacentHTML(
          'beforeend',
          `<div class=${CLASS.ARROW}>⬇️</div>`,
        );
      }
    });
  };

  resetResult = () => {
    this.element.innerHTML = '';
  };
}
