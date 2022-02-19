import DomUtils from '../utils/dom-utils.js';
import { SELECTOR } from '../constants/constants.js';

export default class RacingView {
  constructor() {
    this.$app = DomUtils.$(SELECTOR.ID.APP);
    this.$namesForm = DomUtils.$(SELECTOR.ID.CAR_NAMES_FORM);
    this.$countForm = DomUtils.$(SELECTOR.ID.RACING_COUNT_FORM);
  }

  renderName(nameList) {
    this.$racingProgressNode = document.createElement('section');
    this.$racingProgressNode.id = SELECTOR.ID.RACING_PROGRESS_CONTAINER;

    nameList.forEach((name) => {
      const $container = DomUtils.createCarProgressNode();
      $container.appendChild(DomUtils.createCarProgressNameElement(name));
      this.$racingProgressNode.appendChild($container);
    });
    this.$app.appendChild(this.$racingProgressNode);
    this.renderLoading();
  }

  renderLoading() {
    this.$racingProgressNode
      .querySelectorAll(`.${SELECTOR.CLASS.CAR_PROGRESS_CONTAINER}`)
      .forEach((element) => {
        element.appendChild(DomUtils.circle());
      });
  }

  removeLoading() {
    const loadingElements = document.querySelectorAll(
      `.${SELECTOR.CLASS.CAR_PROGRESS_LOADGING}`
    );
    loadingElements.forEach((element) => {
      element.remove();
    });
  }

  renderProgress(cars) {
    this.removeProgress();
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
    if ($racingProgressNode) {
      this.$app.removeChild($racingProgressNode);
    }
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
      DomUtils.controlNodeDisabled(node, false);
    });
  }

  deactivateCountForm() {
    this.$countForm.childNodes.forEach((node) => {
      DomUtils.controlNodeDisabled(node, true);
    });
  }

  activateNamesForm() {
    this.$namesForm.childNodes.forEach((node) => {
      DomUtils.controlNodeDisabled(node, false);
    });
  }

  deactivateNamesForm() {
    this.$namesForm.childNodes.forEach((node) => {
      DomUtils.controlNodeDisabled(node, true);
    });
  }
}
