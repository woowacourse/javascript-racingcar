import { CLASS, ID, winnerMesssage } from '../utils/constants.js';
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
    this.emit('@clickReplayButton', '');
  };

  renderWinners = (winners) => {
    this.insertTemplate(this.makeWinnersTemplate(winners));
  };

  makeWinnersTemplate = (winners) => `
    <div>
      <h3 class="${CLASS.WINNERS}">${winnerMesssage(winners)}</h3>
    </div>
    `;

  renderReplayButton = () => {
    this.insertTemplate(this.makeReplayButtonTemplate());
  };

  makeReplayButtonTemplate = () => `
      <button class="${CLASS.BTN} ${CLASS.REPLAY_BTN}" id="${ID.REPLAY_BUTTON}">다시 시작하기</button>
    `;
}
