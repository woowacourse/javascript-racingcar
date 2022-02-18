import View from '../core/View.js';
import {
  ERROR_MESSAGE,
  COMMON_MESSAGE,
  DELIMETER,
  CONTRATURATION_INTERVAL,
} from '../configs/constants.js';
import { SELECTOR } from '../configs/dom.js';
import { $, splitString, trimStringArray } from '../utils/utils.js';
import validator from '../utils/validator.js';

export default class RacingCarGameView extends View {
  constructor($target, template) {
    super(template);

    this.$target = $target;
  }

  cacheDOMElements() {
    this.$carNameInput = $(SELECTOR.$CAR_NAME_INPUT);
    this.$carNameButton = $(SELECTOR.$CAR_NAME_BUTTON);
    this.$racingCountInput = $(SELECTOR.$RACING_COUNT_INPUT);
    this.$racingCountButton = $(SELECTOR.$RACING_COUNT_BUTTON);
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

  render({ carList, isRacing, winners }) {
    this.renderInputSection({ carList, isRacing, winners });
    this.renderRacingResult({ carList, isRacing });
    this.renderResult({ winners });
  }

  renderInputSection(carList, isRacing, winners) {
    $(SELECTOR.$INPUT_SECTION).innerHTML = this.template.getInputSectionHTML(
      carList,
      isRacing,
      winners
    );
  }

  renderRacingResult(carList, isRacing) {
    $(SELECTOR.$RACING_RESULT).innerHTML = this.template.getRacingResultHTML(
      carList,
      isRacing
    );
  }

  renderResult(winners) {
    $(SELECTOR.$RESULT).innerHTML = this.template.getResultHTML(winners);
  }

  initializeInput(clearElement, focusElement = clearElement) {
    clearElement.value = '';
    focusElement.focus();
  }

  celebrate() {
    setTimeout(() => {
      alert(COMMON_MESSAGE.CONGRATURATION);
    }, CONTRATURATION_INTERVAL);
  }

  validateCarNameList(carNameList) {
    if (validator.isNotValidNumberOfCars(carNameList)) {
      alert(ERROR_MESSAGE.OUT_OF_NUMBER_OF_CARS_RANGE);
      this.initializeInput(this.$carNameInput);

      return false;
    }

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
