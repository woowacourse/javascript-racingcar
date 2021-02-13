import { $, clearInput, deActivate, activate } from '../util/dom.js';
import { ERROR_MESSAGE } from '../util/errorMessage.js';

export default class TryCountInput {
  constructor(props) {
    this.props = props;
    this.mountDOM();

    this.bindEvents();
  }

  mountDOM() {
    this.$target = $('.try-count-input-containter');
    this.$tryCountInput = $('.try-count-input-containter input[type=number]');
    this.$tryCountSummitBtn = $('.try-count-input-containter button');
  }

  bindEvents() {
    this.$tryCountSummitBtn.addEventListener(
      'click',
      this.handleSubmitTryCount.bind(this),
    );
  }

  handleSubmitTryCount() {
    const { setTryCount } = this.props;
    const inputTryCount = Number(this.$tryCountInput.value);
    const errorMessage = this.getErrorMessage({ inputTryCount });

    if (errorMessage) {
      alert(errorMessage);
      clearInput(this.$tryCountInput);
      return;
    }

    deActivate(this.$tryCountInput, this.$tryCountSummitBtn);
    setTryCount(inputTryCount);
  }

  getErrorMessage({ inputTryCount }) {
    if (!this.isNaturalTryCount(inputTryCount)) {
      return ERROR_MESSAGE.NOT_NATURAL_NUMBER;
    }

    return '';
  }

  resetElements() {
    activate(this.$tryCountInput, this.$tryCountSummitBtn);
    clearInput(this.$tryCountInput);
  }

  isNaturalTryCount(number) {
    return number > 0 && Number.isInteger(number);
  }
}
