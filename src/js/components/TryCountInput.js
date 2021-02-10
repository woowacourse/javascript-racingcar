import { $, clearInput, deActivate, activate } from "../util/domUtil.js";
import { ERROR_MESSAGE } from "../util/errorMessage.js";

export default class TryCountInput {
  constructor(props) {
    this.props = props;
    this.mountDOM();

    this.bindEvents();
  }

  mountDOM() {
    this.$target = $(".try-count-input-containter");
    this.$tryCountInput = $(".try-count-input-containter input[type=number]");
    this.$tryCountSummitBtn = $(".try-count-input-containter button");
  }

  bindEvents() {
    this.$tryCountSummitBtn.addEventListener(
      "click",
      this.handleSubmitTryCount.bind(this),
    );
  }

  handleSubmitTryCount() {
    const { setTryCount } = this.props;
    // TODO: tryCount가 빈 문자열인 경우 처리하기
    const tryCount = Number(this.$tryCountInput.value);

    if (!this.isNaturalTryCount(tryCount)) {
      alert(ERROR_MESSAGE.NOT_NATURAL_NUMBER);
      clearInput(this.$tryCountInput);
      return;
    }

    deActivate(this.$tryCountInput, this.$tryCountSummitBtn);
    setTryCount(tryCount);
  }

  resetElements() {
    activate(this.$tryCountInput, this.$tryCountSummitBtn);
    clearInput(this.$tryCountInput);
  }

  isNaturalTryCount(number) {
    return number > 0 && Number.isInteger(number);
  }
}
