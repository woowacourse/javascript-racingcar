import template from '../templates.js';
import {
  DELAY_TIME,
  DELIMETER,
  SELECTOR,
  WINNER_MESSAGE,
} from '../constants.js';

import View from './View.js';
import { $ } from '../utils/utils.js';

export default class RacingResultView extends View {
  winnersAlertMessage(winners) {
    setTimeout(() => {
      this.alertMessage(`${winners.join(DELIMETER)}` + WINNER_MESSAGE);
    }, DELAY_TIME.WINNER_ALERT);
  }

  renderWinners(winners) {
    this.render(this.$app, 'beforeend', template.renderRacingResult(winners));
    this.insertText($(SELECTOR.$WINNERS), winners.join(`${DELIMETER} `));
    this.winnersAlertMessage(winners);
  }

  bindClickRestartButton(callback) {
    this.bindEventListener('click', SELECTOR.$RESTART_BUTTON, callback);
  }

  init() {
    this.removeElement(this.$app, SELECTOR.$RACING_RESULT);
  }
}
