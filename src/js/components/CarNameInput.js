import { clearInput, disableElements, activateElements } from '../util/dom.js';
import { ERROR_MESSAGE } from '../util/errorMessage.js';
import { CAR_NAME_MAX_LENGTH, CAR_NAME_SEPARATOR } from '../util/constants.js';
import { isEmptyString } from '../util/general.js';

export default class CarNameInput {
  constructor({ createCars, play }) {
    this.$target = document.querySelector('.car-name-input-containter');
    this.$carNameInput = this.$target.querySelector('input[type=text]');
    this.$carNameSummitBtn = this.$target.querySelector('button');
    this.carNames = [];
    this.createCars = createCars;
    this.play = play;

    this.attachEvents();
  }

  attachEvents() {
    this.$carNameSummitBtn.addEventListener('click', this.handleSubmitCarName.bind(this));
  }

  handleSubmitCarName() {
    const inputCarName = this.$carNameInput.value;

    if (isEmptyString(inputCarName)) {
      alert(ERROR_MESSAGE.EMPTY_CAR_NAME_INPUT);

      return;
    }

    const carNames = inputCarName.split(CAR_NAME_SEPARATOR).map((name) => name.trim());
    const errorMessage = this.checkValidInput(carNames);

    if (errorMessage) {
      alert(errorMessage);
      clearInput(this.$carNameInput);

      return;
    }

    disableElements(this.$carNameInput, this.$carNameSummitBtn);
    this.setState(carNames);
    this.createCars(this.carNames);
    this.play();
  }

  reset() {
    activateElements(this.$carNameInput, this.$carNameSummitBtn);
    clearInput(this.$carNameInput);
    this.setState([]);
  }

  checkValidInput(carNames) {
    if (this.isOneCarName(carNames)) {
      return ERROR_MESSAGE.ONE_CAR_NAME_INPUT;
    }

    if (this.isContainEmptyString(carNames)) {
      return ERROR_MESSAGE.EMPTY_STRING_CAR_NAME_INPUT;
    }

    if (this.isDuplicatedCarName(carNames)) {
      return ERROR_MESSAGE.DUPLICATED_CAR_NAME_INPUT;
    }

    if (this.isOverMaxLengthCarName(carNames)) {
      return ERROR_MESSAGE.OVER_MAX_LENGTH_CAR_NAME_INPUT;
    }

    return '';
  }

  isOneCarName(carNames) {
    return carNames.length < 2;
  }

  isContainEmptyString(carNames) {
    return carNames.some((carName) => isEmptyString(carName));
  }

  isDuplicatedCarName(carNames) {
    return carNames.length !== new Set(carNames).size;
  }

  isOverMaxLengthCarName(carNames) {
    return carNames.some((carName) => carName.length > CAR_NAME_MAX_LENGTH);
  }

  setState(nextCarNames) {
    this.carNames = nextCarNames;
  }
}
