import { clearInput, disableElements, activateElements } from '../util/dom.js';
import { isNaturalNumber } from '../util/general.js';
import { ERROR_MESSAGE } from '../util/errorMessage.js';

export default class TryCountInput {
  constructor({ play }) {
    this.$target = document.querySelector('.try-count-input-containter');
    this.$tryCountInput = this.$target.querySelector('input[type=number]');
    this.$tryCountSummitBtn = this.$target.querySelector('button');
    this.tryCount = 0;
    this.play = play;

    this.attachEvents();
  }

  attachEvents() {
    this.$tryCountSummitBtn.addEventListener('click', this.handleSubmitTryCount.bind(this));
  }

  handleSubmitTryCount() {
    const tryCountInput = Number(this.$tryCountInput.value);

    if (!isNaturalNumber(tryCountInput)) {
      alert(ERROR_MESSAGE.NOT_NATURAL_NUMBER);
      clearInput(this.$tryCountInput);
      return;
    }

    disableElements(this.$tryCountInput, this.$tryCountSummitBtn);
    this.setState(tryCountInput);
    this.play();
  }

  reset() {
    activateElements(this.$tryCountInput, this.$tryCountSummitBtn);
    clearInput(this.$tryCountInput);
    this.setState(0);
  }

  setState(nextTryCount) {
    this.tryCount = nextTryCount;
  }
}
