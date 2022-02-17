import { SELECTORS } from '../constants.js';
import { querySelector } from '../utils/dom.js';
import { hideElement, showElement } from '../utils/visibility.js';

class RacingResultView {
  constructor(delegate) {
    this.delegate = delegate;
    this.init();
  }

  init() {
    this.bindViews();
    this.registerEventListeners();
  }

  bindViews() {
    this.$racingResult = querySelector(SELECTORS.RACING_RESULT);
    this.$winners = querySelector(SELECTORS.WINNERS, this.$racingResult);
    this.$restartBtn = querySelector(SELECTORS.RESTART_BUTTON, this.$racingResult);
  }

  registerEventListeners() {
    this.$restartBtn.addEventListener('click', this.delegate.onRestartBtnClick);
  }

  renderWinners(winners) {
    // 마지막 space를 지우기 위해서 trim()을 해준다
    this.$winners.textContent = winners.join(', ').trim();
  }

  show() {
    showElement(this.$racingResult);
  }

  hide() {
    hideElement(this.$racingResult);
  }

  reset() {
    this.$winners.innerHTML = '';
  }
}

export default RacingResultView;
