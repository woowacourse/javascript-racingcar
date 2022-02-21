import { DELIMETER, ERROR_MESSAGE, SELECTOR } from '../constants.js';

import { $, splitString, trimStringArray } from '../utils/utils.js';
import {
  isDuplicatedCarName,
  isValidCarNamesLength,
} from '../utils/validations.js';

import View from './View.js';

export default class CarNameInputView extends View {
  constructor() {
    super();

    this.$carNameInput = $(SELECTOR.$CAR_NAME_INPUT);
    this.$carNameButton = $(SELECTOR.$CAR_NAME_BUTTON);
  }

  isValidateCarNameList(carNameList) {
    if (!isValidCarNamesLength(carNameList)) {
      this.initializeInput(this.$carNameInput);
      this.alertMessage(ERROR_MESSAGE.OUT_OF_CAR_NAME_LENGTH_RANGE);

      return false;
    }

    if (isDuplicatedCarName(carNameList)) {
      this.initializeInput(this.$carNameInput);
      this.alertMessage(ERROR_MESSAGE.DUPLICATED_CAR_NAME);

      return false;
    }

    return true;
  }

  disabledInputButton() {
    this.toggleDisabledButton(this.$carNameButton);
  }

  getUserCarNameInput() {
    return trimStringArray(
      splitString(this.$carNameInput.value, DELIMETER.COMMA)
    );
  }

  bindClickCarNameButton(callback) {
    this.bindEventListener('click', SELECTOR.$CAR_NAME_BUTTON, callback);
  }

  init() {
    this.$carNameInput.value = '';
    this.$carNameInput.focus();

    this.toggleDisabledButton(this.$carNameButton);
  }
}
