import { clearInput, disableElements, activateElements } from '../util/dom.js';
import { isNaturalNumber } from '../util/general.js';
import { ERROR_MESSAGE } from '../util/errorMessage.js';

export default class TryCountInput {
  constructor({ play }) {
    this.$target = document.querySelector('.try-count-input-containter');
    this.$tryCountInput = this.$target.querySelector('input[type=number]');
    this.$tryCountSubmitBtn = this.$target.querySelector('button');
    this.tryCount = 0;
    this.play = play;

    this.attachEvents();
  }

  attachEvents() {
    this.$tryCountSubmitBtn.addEventListener('click', this.handleSubmitTryCount.bind(this));
  }

  handleSubmitTryCount() {
    const tryCountInput = Number(this.$tryCountInput.value);

    if (!isNaturalNumber(tryCountInput)) {
      alert(ERROR_MESSAGE.NOT_NATURAL_NUMBER);
      clearInput(this.$tryCountInput);
      return;
    }

    disableElements(this.$tryCountInput, this.$tryCountSubmitBtn);
    this.setState({ tryCount: tryCountInput });
    this.play();
  }

  reset() {
    activateElements(this.$tryCountInput, this.$tryCountSubmitBtn);
    clearInput(this.$tryCountInput);
    this.setState({ tryCount: 0 });
  }

  setState({ tryCount }) {
    this.tryCount = tryCount;
  }
}
