import { ERROR_MESSAGE } from '../util/errorMessage.js';
import { CAR_NAME_MAX_LENGTH } from '../util/constant.js';

export default class CarNameInput {
  constructor({ setCars }) {
    this.$target = document.querySelector('.car-name-input-containter');
    this.$carNameInput = this.$target.querySelector('input[type=text]');
    this.$carNameSummitBtn = this.$target.querySelector('button');
    this.carNames = [];
    this.setCars = setCars;

    this.bindEvents();
  }

  bindEvents() {
    this.$carNameSummitBtn.addEventListener('click', this.handleSubmitCarName.bind(this));
  }

  handleSubmitCarName() {
    const inputCarName = this.$carNameInput.value;
    const carNames = inputCarName.split(',').map((name) => name.trim());

    if (this.isEmptyCarName(inputCarName.trim())) {
      alert(ERROR_MESSAGE.EMPTY_CAR_NAME_INPUT);
      return;
    }

    if (this.isOneCarName(carNames)) {
      alert(ERROR_MESSAGE.ONE_CAR_NAME_INPUT);
      return;
    }

    if (this.isContainEmptyString(carNames)) {
      alert(ERROR_MESSAGE.EMPTY_STRING_CAR_NAME_INPUT);
      return;
    }

    if (this.isDuplicatedCarName(carNames)) {
      alert(ERROR_MESSAGE.DUPLICATED_CAR_NAME_INPUT);
      return;
    }
  }

  isEmptyCarName(inputCarName) {
    return inputCarName === '';
  }

  isOneCarName(carNames) {
    return carNames.length < 2;
  }

  isContainEmptyString(carNames) {
    return carNames.some((carName) => this.isEmptyCarName(carName));
  }

  isDuplicatedCarName(carNames) {
    return carNames.length !== new Set(carNames).size;
  }
}
