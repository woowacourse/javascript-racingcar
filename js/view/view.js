import { $ } from '../utils/dom.js';

export default class View {
  constructor() {}

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
}
