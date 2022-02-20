import { SELECTORS, SUBMITTED_CLASS_NAME } from '../constants.js';
import { querySelector } from '../utils/dom.js';
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
    this.$form = querySelector(SELECTORS.RACING_GAME_PREPARE_FORM);
    this.$carNamesFieldset = querySelector(SELECTORS.CAR_NAMES_FIELDSET, this.$form);
    this.$carNamesInput = querySelector(SELECTORS.CAR_NAMES_INPUT, this.$carNamesFieldset);
    this.$carNamesSubmitButton = querySelector(SELECTORS.CAR_NAMES_SUBMIT_BUTTON, this.$carNamesFieldset);
    this.$racingCountFieldset = querySelector(SELECTORS.RACING_COUNT_FIELDSET, this.$form);
    this.$racingCountInput = querySelector(SELECTORS.RACING_COUNT_INPUT, this.$racingCountFieldset);
    this.$racingCountSubmitButton = querySelector(
      SELECTORS.RACING_COUNT_SUBMIT_BUTTON,
      this.$racingCountFieldset
    );
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

  showRacingCountFieldset() {
    showElement(this.$racingCountFieldset);
  }

  hideRacingCountFieldset() {
    hideElement(this.$racingCountFieldset);
  }

  markAsSubmitted($input) {
    if ($input.classList.contains(SUBMITTED_CLASS_NAME)) {
      return;
    }
    $input.classList.add(SUBMITTED_CLASS_NAME);
  }

  markCarNamesInputAsSubmitted() {
    this.markAsSubmitted(this.$carNamesInput);
  }

  markRacingCountInputAsSubmitted() {
    this.markAsSubmitted(this.$racingCountInput);
  }

  removeSubmittedMark($input) {
    if (!$input.classList.contains(SUBMITTED_CLASS_NAME)) {
      return;
    }
    $input.classList.remove(SUBMITTED_CLASS_NAME);
  }

  removeSubmittedMarkInCarNamesInput() {
    this.removeSubmittedMark(this.$carNamesInput);
  }

  removeSubmittedMarkInRacingCountInput() {
    this.removeSubmittedMark(this.$racingCountInput);
  }

  resetCarNamesInput() {
    this.$carNamesInput.value = '';
    this.removeSubmittedMarkInCarNamesInput();
  }

  resetRacingCountInput() {
    this.$racingCountInput.value = '';
    this.removeSubmittedMarkInRacingCountInput();
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
    this.resetCarNamesInput();
    this.resetRacingCountInput();
    this.enableSubmit();
  }
}

export default RacingPrepareForm;
