import { $ } from '../utils/dom.js';

export default class View {
  constructor() {
    this.renderInitial();
  }

  carNamesTemplate(carNames) {
    return carNames.map((carName) => `<span id="result-car-name">${carName}</span>`).join('');
  }

  renderCarNames(carNames) {
    $('#car-names').innerHTML = this.carNamesTemplate(carNames);
  }

  winnerTemplate(winners) {
    return `🏆 최종 우승자: ${winners} 🏆`;
  }

  renderWinner(winners) {
    $('#car-racing-winner').innerHTML = this.winnerTemplate(winners);
  }

  carProgressTemplate(carPosition) {
    return carPosition
      .map((position) => `<div id="car-progress-result">${'⬇️️'.repeat(position)}</div>`)
      .join('');
  }

  renderProgress(carPosition) {
    $('#car-progress').innerHTML = this.carProgressTemplate(carPosition);
  }

  renderInitial() {
    $('#game-restart').style.display = 'none';
    $('#car-names').innerHTML = '';
    $('#car-racing-winner').innerHTML = '';
    $('#car-progress').innerHTML = '';
    $('#car-names-input').value = '';
    $('#car-racing-count-input').value = '';
  }

  renderRestartButton() {
    $('#game-restart').style.display = 'block';
  }
}
