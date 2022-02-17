import { CAR_NAMES_INPUT_PLACEHOLDER, RACING_COUNT_INPUT_PLACEHOLDER, SELECTORS } from '../constants.js';
import $ from '../utils/dom.js';
import { hideElement, showElement } from '../utils/visibility.js';

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
    this.$carNamesSubmitButton.addEventListener('click', this.delegate.onCarNamesSubmit);
    this.$racingCountSubmitButton.addEventListener('click', this.delegate.onRacingCountSubmit);
  }

  getCarNames() {
    return this.$carNamesInput.value;
  }

  getRacingCount() {
    return this.$racingCountInput.value;
  }

  resetCarNamesInput(placeholder = '') {
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

  disableSubmit() {
    this.$carNamesInput.disabled = true;
    this.$carNamesSubmitButton.disabled = true;
    this.$racingCountInput.disabled = true;
    this.$racingCountSubmitButton.disabled = true;
  }

  enableSubmit() {
    this.$carNamesInput.disabled = false;
    this.$carNamesSubmitButton.disabled = false;
    this.$racingCountInput.disabled = false;
    this.$racingCountSubmitButton.disabled = false;
  }

  reset() {
    this.hideRacingCountFieldset();
    this.resetCarNamesInput(CAR_NAMES_INPUT_PLACEHOLDER);
    this.resetRacingCountInput(RACING_COUNT_INPUT_PLACEHOLDER);
    this.enableSubmit();
  }
}

export default RacingPrepareForm;
