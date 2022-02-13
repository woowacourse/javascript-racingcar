import DomUtils from '../utils/dom-utils.js';
import { SELECTOR } from '../constants/constants.js';

export default class RacingView {
  constructor() {
    this.$app = DomUtils.$(SELECTOR.ID.APP);
    this.$namesForm = DomUtils.$(SELECTOR.ID.CAR_NAMES_FORM);
    this.$countForm = DomUtils.$(SELECTOR.ID.RACING_COUNT_FORM);
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
    const $racingProgressNode = DomUtils.$(
      SELECTOR.ID.RACING_PROGRESS_CONTAINER
    );
    this.$app.removeChild($racingProgressNode);
  }

  removeResult() {
    const $racingResultNode = DomUtils.$(SELECTOR.ID.RACING_RESULT_CONTAINER);
    this.$app.removeChild($racingResultNode);
  }

  static clearInput() {
    DomUtils.$(SELECTOR.ID.CAR_NAMES_INPUT).value = '';
    DomUtils.$(SELECTOR.ID.RACING_COUNT_INPUT).value = '';
  }

  activateCountForm() {
    this.$countForm.childNodes.forEach((node) => {
      const element = node;
      element.disabled = false;
    });
  }

  deactivateCountForm() {
    this.$countForm.childNodes.forEach((node) => {
      const element = node;
      element.disabled = true;
    });
  }

  activateNamesForm() {
    this.$namesForm.childNodes.forEach((node) => {
      const element = node;
      element.disabled = false;
    });
  }

  deactivateNamesForm() {
    this.$namesForm.childNodes.forEach((node) => {
      const element = node;
      element.disabled = true;
    });
  }
}
