import DomUtils from '../utils/dom-utils.js';
import { SELECTOR } from '../constants/constants.js';

export default class RacingView {
  constructor() {
    this.$app = document.getElementById(SELECTOR.ID.APP);
    this.$namesForm = document.getElementById(SELECTOR.ID.CAR_NAMES_FORM);
    this.$countForm = document.getElementById(SELECTOR.ID.RACING_COUNT_FORM);
  }

  renderProgress(cars) {
    this.$app.appendChild(DomUtils.createRacingProgressElement(cars));
  }

  renderResult(winnerList) {
    this.$app.appendChild(DomUtils.createWinnerElement(winnerList));
  }

  reset() {
    this.removeProgress();
    this.removeResult();
    RacingView.clearInput();
    this.activateNamesForm();
    this.deactivateCountForm();
  }

  removeProgress() {
    const $racingProgressNode = document.getElementById(
      SELECTOR.ID.RACING_PROGRESS_CONTAINER
    );
    this.$app.removeChild($racingProgressNode);
  }

  removeResult() {
    const $racingResultNode = document.getElementById(
      SELECTOR.ID.RACING_RESULT_CONTAINER
    );
    this.$app.removeChild($racingResultNode);
  }

  static clearInput() {
    document.getElementById(SELECTOR.ID.CAR_NAMES_INPUT).value = '';
    document.getElementById(SELECTOR.ID.CAR_NAMES_INPUT).value = '';
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
