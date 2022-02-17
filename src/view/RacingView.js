import DomUtils from '../utils/dom-utils.js';
import $ from '../utils/selector.js';
import { SELECTOR } from '../constants/constants.js';
import Template from '../layouts/template.js';

export default class RacingView {
  constructor() {
    this.$app = $(`#${SELECTOR.ID.APP}`);
    this.$namesForm = $(`#${SELECTOR.ID.CAR_NAMES_FORM}`);
    this.$countForm = $(`#${SELECTOR.ID.RACING_COUNT_FORM}`);
    this.$progressContainer = $(`#${SELECTOR.ID.RACING_PROGRESS_CONTAINER}`);
    this.$resultContainer = $(`#${SELECTOR.ID.RACING_RESULT_CONTAINER}`);
    this.template = new Template();
  }

  insertIntoProgressContainer(template) {
    this.$progressContainer.insertAdjacentHTML('beforeend', template);
  }

  renderName(carNames) {
    this.insertIntoProgressContainer(this.createCarNamesTemplate(carNames));
  }

  createCarNamesTemplate(carNames) {
    return `
    ${carNames
      .map(
        (carName) => `
      <div id="${carName}-container" class="${SELECTOR.CLASS.CAR_PROGRESS_CONTAINER}">
        <div class="${SELECTOR.CLASS.CAR_PROGRESS_NAME}">${carName}</div>
      </div > 
    `
      )
      .join('')}
    `;
  }

  renderProgress(cars) {
    console.log(cars);
    this.$progressContainer.innerHTML =
      this.template.racingProgressTemplate(cars);
  }

  renderResult(winnerList) {
    this.$resultContainer.innerHTML = this.template.winnerTemplate(winnerList);
  }

  reset() {
    this.removeProgress();
    this.removeResult();
    RacingView.clearInput();
    this.activateNamesForm();
    this.deactivateCountForm();
  }

  removeProgress() {
    this.$progressContainer.innerHTML = ``;
  }

  removeResult() {
    this.$resultContainer.innerHTML = ``;
  }

  static clearInput() {
    document.getElementById(SELECTOR.ID.CAR_NAMES_INPUT).value = '';
    document.getElementById(SELECTOR.ID.RACING_COUNT_INPUT).value = '';
  }

  activateCountForm() {
    for (let i = 0; i < this.$countForm.childNodes.length; i += 1) {
      this.$countForm.childNodes[i].disabled = false;
    }
  }

  deactivateCountForm() {
    for (let i = 0; i < this.$countForm.childNodes.length; i += 1) {
      this.$countForm.childNodes[i].disabled = true;
    }
  }

  activateNamesForm() {
    for (let i = 0; i < this.$namesForm.childNodes.length; i += 1) {
      this.$namesForm.childNodes[i].disabled = false;
    }
  }

  deactivateNamesForm() {
    for (let i = 0; i < this.$namesForm.childNodes.length; i += 1) {
      this.$namesForm.childNodes[i].disabled = true;
    }
  }
}
