import { $, $$ } from '../utils/dom.js';
import { SELECTOR } from '../utils/constants.js';
import { template } from './template.js';
export default class View {
  constructor() {
    this.renderInitial();
  }

  renderCarNames(carNames) {
    $(SELECTOR.CAR_NAMES).innerHTML = template.carNamesTemplate(carNames);
  }

  renderWinner(winners) {
    $(SELECTOR.CAR_RACING_WINNER).innerHTML = template.winnerTemplate(winners);
  }

  renderCarProgress(carPosition) {
    $(SELECTOR.CAR_PROGRESS).innerHTML = template.carProgressTemplate(carPosition);
  }

  renderInitialLoading(carPosition) {
    $(SELECTOR.CAR_PROGRESS).innerHTML = carPosition
      .map((position) => `<div id="car-progress-result"><div class="loader"></div></div>`)
      .join('');
  }

  renderLoading() {
    $$('#car-progress-result').forEach((el) => {
      el.insertAdjacentHTML('beforeend', '<div class="loader"></div>');
    });
  }

  hideLoader() {
    $$('.loader').forEach((el) => {
      el.style.display = 'none';
    });
  }

  renderInitial() {
    $(SELECTOR.GAME_RESTART).style.display = 'none';
    $(SELECTOR.CAR_NAMES).innerHTML = '';
    $(SELECTOR.CAR_RACING_WINNER).innerHTML = '';
    $(SELECTOR.CAR_PROGRESS).innerHTML = '';
    $(SELECTOR.CAR_NAMES_INPUT).value = '';
    $(SELECTOR.CAR_RACING_COUNT_INPUT).value = '';
    $(SELECTOR.CAR_RACING_COUNT_WRAPPER).style.display = 'none';
  }

  renderRestartButton() {
    $(SELECTOR.GAME_RESTART).style.display = 'block';
  }

  renderCarRacingInputBox() {
    $(SELECTOR.CAR_RACING_COUNT_WRAPPER).style.display = 'block';
  }
}
