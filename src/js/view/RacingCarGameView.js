import View from '../core/View.js';
import {
  ERROR_MESSAGE,
  DELIMETER,
  CONGRATURATION_INTERVAL,
} from '../configs/constants.js';
import { SELECTOR } from '../configs/dom.js';
import { splitString, trimStringArray } from '../utils/utils.js';
import validator from '../utils/validator.js';

export default class RacingCarGameView extends View {
  cacheDOMElements() {
    this.$carNameInput = this.get(SELECTOR.$CAR_NAME_INPUT);
    this.$carNameButton = this.get(SELECTOR.$CAR_NAME_BUTTON);
    this.$racingCountInput = this.get(SELECTOR.$RACING_COUNT_INPUT);
    this.$racingCountButton = this.get(SELECTOR.$RACING_COUNT_BUTTON);
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

  render(props) {
    this.renderInputSection(props);
    this.renderRacingResult(props);
    this.renderResult(props);
  }

  renderInputSection(props) {
    this.get(SELECTOR.$INPUT_SECTION).innerHTML =
      this.template.getInputSectionHTML(props);
  }

  renderRacingResult(props) {
    this.get(SELECTOR.$RACING_RESULT).innerHTML =
      this.template.getRacingResultHTML(props);
  }

  renderResult(props) {
    this.get(SELECTOR.$RESULT).innerHTML = this.template.getResultHTML(props);
  }

  initializeInput(clearElement, focusElement = clearElement) {
    clearElement.value = '';
    focusElement.focus();
  }

  celebrate(winners) {
    setTimeout(() => {
      alert(this.template.congraturation(winners));
    }, CONGRATURATION_INTERVAL);
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
