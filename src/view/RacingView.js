import { $, $$ } from '../utils/selector.js';
import { SELECTOR } from '../constants/constants.js';
import Template from '../layouts/template.js';

export default class RacingView {
  constructor() {
    this.$app = $(SELECTOR.ID.APP);
    this.$namesForm = $(SELECTOR.ID.CAR_NAMES_FORM);
    this.$roundForm = $(SELECTOR.ID.RACING_ROUND_FORM);
    this.$progressContainer = $(SELECTOR.ID.RACING_PROGRESS_CONTAINER);
    this.$resultContainer = $(SELECTOR.ID.RACING_RESULT_CONTAINER);
    this.$nameInput = $(SELECTOR.ID.CAR_NAMES_INPUT);
    this.$roundInput = $(SELECTOR.ID.RACING_ROUND_INPUT);
  }

  static renderProgressLoading() {
    const $$eachCarProgressStatus = $$(SELECTOR.CLASS.CAR_PROGRESS_CONTAINER);
    $$eachCarProgressStatus.forEach((status) => {
      status.insertAdjacentHTML('beforeend', Template.loaderTemplate());
    });
  }

  renderProgress(cars) {
    this.$progressContainer.innerHTML = Template.racingProgressTemplate(cars);
  }

  renderResult(winnerList) {
    this.$resultContainer.innerHTML = Template.winnerTemplate(winnerList);
  }

  reset() {
    this.removeProgress();
    this.removeResult();
    this.clearInput();
    this.activateNamesForm();
    this.deactivateRoundForm();
  }

  removeProgress() {
    this.$progressContainer.innerHTML = ``;
  }

  removeResult() {
    this.$resultContainer.innerHTML = ``;
  }

  clearInput() {
    this.$nameInput.value = '';
    this.$roundInput.value = '';
  }

  activateRoundForm() {
    for (let i = 0; i < this.$roundForm.childNodes.length; i += 1) {
      this.$roundForm.childNodes[i].disabled = false;
    }
  }

  deactivateRoundForm() {
    for (let i = 0; i < this.$roundForm.childNodes.length; i += 1) {
      this.$roundForm.childNodes[i].disabled = true;
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

  getCarNameList() {
    const nameList = this.$nameInput.value.split(',');
    return nameList.map((name) => name.trim());
  }

  getRacingRound() {
    return this.$roundInput.value;
  }
}
