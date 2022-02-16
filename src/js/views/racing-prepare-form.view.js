import { SELECTORS } from '../constants.js';
import $ from '../utils/dom.js';
import { hideElement, showElement } from '../utils/setAttribute.js';

class RacingPrepareForm {
  constructor(delegate) {
    this.delegate = delegate;
    this.init();
  }

  init() {
    this.bindViews();
    this.registerEventListeners();
  }

  bindViews() {
    this.$form = $(SELECTORS.RACING_GAME_PREPARE_FORM);
    this.$carNamesFieldset = $(SELECTORS.CAR_NAMES_FIELDSET, this.$form);
    this.$carNamesInput = $(SELECTORS.CAR_NAMES_INPUT, this.$carNamesFieldset);
    this.$carNamesSubmitButton = $(SELECTORS.CAR_NAMES_SUBMIT_BUTTON, this.$carNamesFieldset);
    this.$racingCountFieldset = $(SELECTORS.RACING_COUNT_FIELDSET, this.$form);
    this.$racingCountInput = $(SELECTORS.RACING_COUNT_INPUT, this.$racingCountFieldset);
    this.$racingCountSubmitButton = $(SELECTORS.RACING_COUNT_SUBMIT_BUTTON, this.$racingCountFieldset);
  }

  registerEventListeners() {
    this.$carNamesSubmitButton.addEventListener('click', this.delegate.onSubmitCarNames);
    this.$racingCountSubmitButton.addEventListener('click', this.delegate.onSubmitRacingCount);
  }

  getCarNames() {
    return this.$carNamesInput.value;
  }

  getRacingCount() {
    return this.$racingCountInput.value;
  }

  resetCarNameInput(placeholder = '') {
    this.$carNamesInput.value = '';
    this.$carNamesInput.placeholder = placeholder;
  }

  resetRacingCountInput(placeholder = '') {
    this.$racingCountInput.value = '';
    this.$racingCountInput.placeholder = placeholder;
  }

  showRacingCountFieldset() {
    showElement(this.$racingCountFieldset);
  }

  hideRacingCountFieldset() {
    hideElement(this.$racingCountFieldset);
  }
}

export default RacingPrepareForm;
