import { $ } from '../utils/dom.js';
import { SELECTOR } from '../utils/constants.js';
export default class View {
  constructor() {
    this.renderInitial();
  }

  carNamesTemplate(carNames) {
    return carNames.map((carName) => `<span id="result-car-name">${carName}</span>`).join('');
  }

  renderCarNames(carNames) {
    $(SELECTOR.CAR_NAMES).innerHTML = this.carNamesTemplate(carNames);
  }

  winnerTemplate(winners) {
    return `🏆 최종 우승자: ${winners} 🏆`;
  }

  renderWinner(winners) {
    $(SELECTOR.CAR_RACING_WINNER).innerHTML = this.winnerTemplate(winners);
  }

  carProgressTemplate(carPosition) {
    return carPosition
      .map((position) => `<div id="car-progress-result">${'⬇️️'.repeat(position)}</div>`)
      .join('');
  }

  renderProgress(carPosition) {
    $(SELECTOR.CAR_PROGRESS).innerHTML = this.carProgressTemplate(carPosition);
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
