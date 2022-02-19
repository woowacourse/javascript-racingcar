import { ERROR_MESSAGE, SELECTOR } from '../constants.js';

import { isOutOfRacingCountRange } from '../utils/validations.js';
import { $ } from '../utils/utils.js';

import View from './View.js';

export default class RacingCountInputView extends View {
  constructor() {
    super();

    this.$racingCountInput = $(SELECTOR.$RACING_COUNT_INPUT);
    this.$racingCountButton = $(SELECTOR.$RACING_COUNT_BUTTON);
    this.$racingCountInputSection = $(SELECTOR.$RACING_COUNT_INPUT_SECTION);
  }

  isValidRacingCount(racingCount) {
    if (isOutOfRacingCountRange(racingCount)) {
      this.alertMessage(ERROR_MESSAGE.OUT_OF_RACING_COUNT_RANGE);
      this.initializeInput(this.$racingCountInput);

      return false;
    }

    return true;
  }

  disabledInputButton() {
    this.toggleDisabledButton(this.$racingCountButton);
  }

  visibleSection() {
    this.toggleVisibled(this.$racingCountInputSection);
  }

  invisibleSection() {
    this.toggleVisibled(this.$racingCountInputSection);
  }

  getUserRacingCountInput() {
    return this.$racingCountInput.valueAsNumber;
  }

  bindClickRacingCountButton(callback) {
    this.bindEventListener('click', SELECTOR.$RACING_COUNT_BUTTON, callback);
  }

  init() {
    this.$racingCountInput.value = '';
    this.$racingCountInput.focus();

    this.toggleDisabledButton(this.$racingCountButton);
    this.toggleVisibled(this.$racingCountInputSection);
  }
}
