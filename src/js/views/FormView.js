import { $ } from '../utils/dom.js';
import { showElement, hideElement } from '../utils/attribute.js';
import { SELECTOR } from '../utils/constants.js';

export default class FormView {
  constructor() {
    this.initDom();
  }

  initDom() {
    this.$namesInput = $(SELECTOR.CAR_NAMES_INPUT);
    this.$countInput = $(SELECTOR.RACING_COUNT_INPUT);
    this.$racingStatus = $(SELECTOR.RACING_STATUS);
    this.$countContainer = $(SELECTOR.RACING_COUNT_CONTAINER);
    this.$racingContainer = $(SELECTOR.RACING_CONTAINER);
    this.$resultContainer = $(SELECTOR.RESULT_CONTAINER);
  }

  showNextStage(sectionElement) {
    showElement(sectionElement);
  }

  startUpScreen() {
    this.$namesInput.value = '';
    this.$countInput.value = '';
    this.$racingStatus.innerText = '';
    hideElement(this.$countContainer);
    hideElement(this.$racingContainer);
    hideElement(this.$resultContainer);
  }
}
