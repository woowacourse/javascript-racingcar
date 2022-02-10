import { $ } from '../utils/dom.js';

export default class View {
  constructor() {
    this.renderInitial();
  }

  renderCarNames(carNames) {
    const template = carNames
      .map((carName) => {
        return `<span>${carName}</span>`;
      })
      .join('');
    $('#car-names').insertAdjacentHTML('afterbegin', template);
  }

  renderWinner(winners) {
    const WINNER = `🏆 최종 우승자: ${winners} 🏆`;
    $('#car-racing-winner').innerHTML = WINNER;
  }

  renderProgress(carPosition) {
    const template = carPosition
      .map((position) => {
        return `<div>${position}</div>`;
      })
      .join('');
    $('#car-progress').innerHTML = template;
  }

  renderInitial() {
    $('#game-restart').style.display = 'none';
    $('#car-names').innerHTML = '';
    $('#car-racing-winner').innerHTML = '';
    $('#car-progress').innerHTML = '';
    $('#car-names-input').value = '';
    $('#car-racing-count-input').value = '';
    // input 값 비워주기
  }

  renderRestartButton() {
    $('#game-restart').style.display = 'block';

    // click => controller.gameRestart
  }
}
