import { resetInput, disableElements } from "../util/domUtil.js";
import { ERROR_MESSAGE } from "../util/errorMessage.js";
import { CAR_NAME_MAX_LENGTH } from "../util/constant.js";

export default class CarNameInput {
  constructor({ setCars }) {
    this.$target = document.querySelector(".car-name-input-containter");
    this.$carNameInput = this.$target.querySelector("input[type=text]");
    this.$carNameSummitBtn = this.$target.querySelector("button");
    this.setCars = setCars;

    this.bindEvents();
  }

  bindEvents() {
    this.$carNameSummitBtn.addEventListener(
      "click",
      this.handleSubmitCarName.bind(this),
    );
  }

  handleSubmitCarName() {
    const inputCarName = this.$carNameInput.value;
    const carNames = inputCarName.split(",").map((name) => name.trim());
    const errorMessage = this.checkValidInput({ inputCarName, carNames });

    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    this.setCars(carNames);

    disableElements(this.$carNameInput, this.$carNameSummitBtn);
    // this.$carNameInput.disabled = true;
    // this.$carNameSummitBtn.disabled = true;
  }

  checkValidInput({ inputCarName, carNames }) {
    if (this.isEmptyCarName(inputCarName.trim())) {
      return ERROR_MESSAGE.EMPTY_CAR_NAME_INPUT;
    }

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

    return "";
  }

  isEmptyCarName(inputCarName) {
    return inputCarName === "";
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

  isOverMaxLengthCarName(carNames) {
    return carNames.some((carName) => carName.length > CAR_NAME_MAX_LENGTH);
  }
}
