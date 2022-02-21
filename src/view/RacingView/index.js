import DomUtils from '../../utils/dom-utils.js';
import { SELECTOR, TIME } from '../../constants/constants.js';
import RacingProgressView from './RacingProgresView.js';

export default class RacingView {
  constructor() {
    this.$app = DomUtils.$(SELECTOR.ID.APP);
    this.$namesForm = DomUtils.$(SELECTOR.ID.CAR_NAMES_FORM);
    this.$countForm = DomUtils.$(SELECTOR.ID.RACING_COUNT_FORM);
    this.$progressContainer = new RacingProgressView();
    this.$app.appendChild(this.$progressContainer.node);
  }

  renderResult(winnerList) {
    this.$app.appendChild(DomUtils.createWinnerElement(winnerList));
    this.celebartionAlram = setTimeout(() => {
      alert(`🎉 축하합니다. 최종 우승자는 ${winnerList.join(', ')}입니다! 🎉`);
    }, TIME.DELAY_RACE_RESULT);
  }

  clearCelebration() {
    clearTimeout(this.celebartionAlram);
  }

  initCarList(names, round) {
    this.$progressContainer.initCarList(names, round);
  }

  renderProgress(movedCars) {
    this.$progressContainer.renderProgress(movedCars);
  }

  reset() {
    this.$progressContainer.removeChilds();
    this.removeResult();
    RacingView.clearInput();
    this.activateNamesForm();
    this.deactivateCountForm();
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
