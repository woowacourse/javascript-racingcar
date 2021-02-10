import {
  resetInput,
  disableElements,
  activateElements,
} from "../util/domUtil.js";
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
    // TODO: tryCount가 빈 문자열인 경우 처리하기
    const tryCount = Number(this.$tryCountInput.value);

    if (!this.isNaturalTryCount(tryCount)) {
      alert(ERROR_MESSAGE.NOT_NATURAL_NUMBER);
      resetInput(this.$tryCountInput);
      return;
    }

    disableElements(this.$tryCountInput, this.$tryCountSummitBtn);
    this.setTryCount(tryCount);
  }

  resetElements() {
    activateElements(this.$tryCountInput, this.$tryCountSummitBtn);
    resetInput(this.$tryCountInput);
  }

  isNaturalTryCount(number) {
    return number > 0 && Number.isInteger(number);
  }
}
