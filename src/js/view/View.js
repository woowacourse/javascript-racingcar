import { ERROR_MESSAGE, DELIMETER } from '../configs/constants.js';
import { SELECTOR } from '../configs/dom.js';
import { $, $all, splitString, trimStringArray } from '../utils/utils.js';
import validator from '../utils/validator.js';

export default class View {
  constructor(template) {
    this.template = template;

    this.cacheDOMElements();
  }

  cacheDOMElements() {
    this.$app = $(SELECTOR.$APP);
    this.$carNameInput = $(SELECTOR.$CAR_NAME_INPUT);
    this.$carNameButton = $(SELECTOR.$CAR_NAME_BUTTON);
    this.$racingCountInput = $(SELECTOR.$RACING_COUNT_INPUT);
    this.$racingCountButton = $(SELECTOR.$RACING_COUNT_BUTTON);
  }

  bindEventListener(type, selector, callback) {
    const children = [...$all(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.$app.addEventListener(type, (e) => {
      if (!isTarget(e.target)) return;

      e.preventDefault();
      callback(e);
    });
  }

  bindSubmitCarNames(callback) {
    this.bindEventListener('click', SELECTOR.$CAR_NAME_BUTTON, () => {
      const carNameList = trimStringArray(
        splitString(this.$carNameInput.value, DELIMETER)
      );

      if (!this.validateCarNameList(carNameList)) return;

      callback(carNameList);
    });
  }

  bindSubmitRacingCount(callback) {
    this.bindEventListener('click', SELECTOR.$RACING_COUNT_BUTTON, () => {
      const racingCount = this.$racingCountInput.valueAsNumber;

      if (!this.validateRacingCount(racingCount)) return;

      callback(racingCount);
    });
  }

  bindClickRestartButton(callback) {
    this.bindEventListener('click', SELECTOR.$RESTART_BUTTON, () => {
      this.$carNameInput.value = '';
      this.$racingCountInput.value = '';
      this.$carNameInput.focus();

      callback();
    });
  }

  renderRacingCountButton(carList) {
    $(SELECTOR.$RACING_COUNT_BUTTON).disabled =
      validator.isCarListNotFound(carList);
  }

  renderRacingResult(carList) {
    $(SELECTOR.$RACING_RESULT).innerHTML =
      this.template.getRacingResultHTML(carList);
  }

  renderResult(winners) {
    $(SELECTOR.$RESULT).innerHTML = this.template.getResultHTML(winners);
  }

  initializeInput(clearElement, focusElement = clearElement) {
    clearElement.value = '';
    focusElement.focus();
  }

  validateCarNameList(carNameList) {
    if (validator.isNotValidCarNamesLength(carNameList)) {
      alert(ERROR_MESSAGE.OUT_OF_CAR_NAME_LENGTH_RANGE);
      this.initializeInput(this.$carNameInput);

      return false;
    }

    if (validator.isDuplicatedCarName(carNameList)) {
      alert(ERROR_MESSAGE.DUPLICATED_CAR_NAME);
      this.initializeInput(this.$carNameInput);

      return false;
    }

    return true;
  }

  validateRacingCount(racingCount) {
    if (validator.isNotValidRacingCount(racingCount)) {
      alert(ERROR_MESSAGE.OUT_OF_RACING_COUNT_RANGE);
      this.initializeInput(this.$racingCountInput);

      return false;
    }

    return true;
  }
}
