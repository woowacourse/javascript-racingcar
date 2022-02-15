import TEMPLATE from '../templates.js';
import {
  ERROR_MESSAGE,
  SELECTOR,
  RACING_COUNT_RANGE,
  CAR_NAME_LENGTH_RANGE,
  DELIMETER,
} from '../constants.js';
import { $, $all, splitString, trimStringArray } from '../utils.js';

export default class View {
  constructor() {
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

      if (
        this.validateCarNameList(carNameList) ||
        this.validateUniqueCarName(carNameList)
      ) {
        return;
      }

      callback(carNameList);
    });
  }

  bindSubmitRacingCount(callback) {
    this.bindEventListener('click', SELECTOR.$RACING_COUNT_BUTTON, () => {
      const racingCount = this.$racingCountInput.valueAsNumber;

      if (
        this.validateRacingCount(racingCount)
        // this.validateCarListFound(carList)
      ) {
        return;
      }

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
    $(SELECTOR.$RACING_COUNT_BUTTON).disabled = this.isCarListNotFound(carList);
  }

  renderRacingResult(carList) {
    $(SELECTOR.$RACING_RESULT).innerHTML =
      TEMPLATE.RENDER_RACING_RESULT(carList);
  }

  renderResult(winners) {
    $(SELECTOR.$RESULT).innerHTML = TEMPLATE.RENDER_RESULT(winners);
  }

  isNotValidCarNamesLength(carNameList) {
    return !carNameList.every(
      (name) =>
        name.length >= CAR_NAME_LENGTH_RANGE.MIN &&
        name.length <= CAR_NAME_LENGTH_RANGE.MAX
    );
  }

  isDuplicatedCarName(carNameList) {
    return carNameList.length !== new Set(carNameList).size;
  }

  isNotValidRacingCount(racingCount) {
    return (
      !Number.isInteger(racingCount) ||
      racingCount <= RACING_COUNT_RANGE.MIN ||
      racingCount > RACING_COUNT_RANGE.MAX
    );
  }

  isCarListNotFound(carList) {
    return !carList.length;
  }

  validateCarNameList(carNameList) {
    if (this.isNotValidCarNamesLength(carNameList)) {
      alert(ERROR_MESSAGE.OUT_OF_CAR_NAME_LENGTH_RANGE);
      this.initializeInput(this.$carNameInput);

      return true;
    }

    return false;
  }

  validateUniqueCarName(carNameList) {
    if (this.isDuplicatedCarName(carNameList)) {
      alert(ERROR_MESSAGE.DUPLICATED_CAR_NAME);
      this.initializeInput(this.$carNameInput);

      return true;
    }

    return false;
  }

  validateRacingCount(racingCount) {
    if (this.isNotValidRacingCount(racingCount)) {
      alert(ERROR_MESSAGE.OUT_OF_RACING_COUNT_RANGE);
      this.initializeInput(this.$racingCountInput);

      return true;
    }

    return false;
  }

  initializeInput(clearElement, focusElement = clearElement) {
    clearElement.value = '';
    focusElement.focus();
  }
}
