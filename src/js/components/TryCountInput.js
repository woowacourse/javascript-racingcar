import { resetInput, disableElements } from "../util/domUtil.js";
import { ERROR_MESSAGE } from "../util/errorMessage.js";

export default class TryCountInput {
  constructor({ setTryCount }) {
    this.$target = document.querySelector(".try-count-input-containter");
    this.$tryCountInput = this.$target.querySelector("input[type=number]");
    this.$tryCountSummitBtn = this.$target.querySelector("button");
    this.setTryCount = setTryCount;

    this.bindEvents();
  }

  bindEvents() {
    this.$tryCountSummitBtn.addEventListener(
      "click",
      this.handleSubmitTryCount.bind(this),
    );
  }

  handleSubmitTryCount() {
    const tryCount = Number(this.$tryCountInput.value);

    if (!this.isNaturalTryCount(tryCount)) {
      alert(ERROR_MESSAGE.NOT_NATURAL_NUMBER);
      resetInput(this.$tryCountInput);
      return;
    }

    this.setTryCount(tryCount);

    disableElements(this.$tryCountInput, this.$tryCountSummitBtn);
  }

  isNaturalTryCount(number) {
    return number > 0 && Number.isInteger(number);
  }
}
