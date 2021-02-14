import { $, clearInput, disableElements, enableElements } from '../util/dom.js';
import { ERROR_MESSAGE } from '../util/message.js';

export default class TryCountInput {
  constructor(props) {
    this.props = props;
    this.selectDOM();

    this.bindEvents();
  }

  selectDOM() {
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
    const { setTryCount, playGame } = this.props;
    const inputTryCount = Number(this.$tryCountInput.value);
    const errorMessage = validateInputValue(inputTryCount);

    if (errorMessage) {
      alert(errorMessage);
      clearInput(this.$tryCountInput);
      return;
    }

    disableElements(this.$tryCountInput, this.$tryCountSummitBtn);
    setTryCount(inputTryCount);
    playGame();
  }

  resetElements() {
    enableElements(this.$tryCountInput, this.$tryCountSummitBtn);
    clearInput(this.$tryCountInput);
  }
}

const validateInputValue = inputTryCount => {
  if (!isNaturalTryCount(inputTryCount)) {
    return ERROR_MESSAGE.NOT_NATURAL_NUMBER;
  }

  return '';
};

const isNaturalTryCount = number => number > 0 && Number.isInteger(number);
