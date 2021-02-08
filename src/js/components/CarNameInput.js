import { ERROR_MESSAGE } from "../util/errorMessage.js";
import { CAR_NAME_MAX_LENGTH } from "../util/constant.js";

export default class CarNameInput {
  constructor({ setCars }) {
    this.$target = document.querySelector(".car-name-input-containter");
    this.$carNameInput = this.$target.querySelector("input[type=text]");
    this.$carNameSummitBtn = this.$target.querySelector("button");
    this.carNames = [];
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

    if (this.isEmptyCarName(inputCarName)) {
      alert(ERROR_MESSAGE.EMPTY_CAR_NAME_INPUT);
      return;
    }

    if (this.isOneCarName(carNames)) {
      alert(ERROR_MESSAGE.ONE_CAR_NAME_INPUT);
      return;
    }
  }

  isEmptyCarName(inputCarName) {
    return inputCarName.trim() === "";
  }

  isOneCarName(carNames) {
    return carNames.length < 2;
  }
}
