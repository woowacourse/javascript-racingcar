import { SELECTORS } from '../constants.js';
import $ from '../utils/dom.js';

class RacingResultView {
  constructor(delegate) {
    this.delegate = delegate;
    this.init();
  }

  init() {
    this.bindViews();
  }

  bindViews() {
    this.$racingResult = $(SELECTORS.RACING_RESULT);
    this.$winners = $(SELECTORS.WINNERS, this.$racingResult);
  }

  renderWinners(winners) {
    // 마지막 space를 지우기 위해서 trim()을 해준다
    this.$winners.textContent = winners.join(', ').trim();
  }
}

export default RacingResultView;
