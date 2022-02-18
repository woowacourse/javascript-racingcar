import { CUSTOM_EVENT, ID } from '../utils/constants.js';
import {
  makeReplayButtonTemplate,
  makeWinnersTemplate,
} from '../utils/template.js';
import View from './View.js';

export default class WinnerView extends View {
  setup = () => {
    this.bindEvent();
    return this;
  };

  bindEvent = () => {
    this.element.addEventListener('click', this.onClickReplayButton);
  };

  onClickReplayButton = (e) => {
    if (e.target.id !== ID.REPLAY_BUTTON) {
      return;
    }
    this.emit(CUSTOM_EVENT.CLICK_REPLAY_BUTTON);
  };

  renderWinners = (winners) => {
    this.insertTemplate(makeWinnersTemplate(winners));
  };

  renderReplayButton = () => {
    this.insertTemplate(makeReplayButtonTemplate());
  };
}
