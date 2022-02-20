import { $, $$ } from '../utils/dom.js';
import { SELECTOR, TIMER } from '../utils/constants.js';

export default class View {
  constructor() {
    this.renderInitial();
  }

  carNamesTemplate(carNames) {
    return carNames.map((carName) => `<span id="result-car-name">${carName}</span>`).join('');
  }

  renderCarNames(carNames) {
    $(SELECTOR.CAR_NAMES).textContent = '';
    $(SELECTOR.CAR_NAMES).insertAdjacentHTML('afterbegin', this.carNamesTemplate(carNames));
  }

  winnerTemplate(winners) {
    return `🏆 최종 우승자: ${winners} 🏆`;
  }

  renderWinner(winners) {
    $(SELECTOR.CAR_RACING_WINNER).textContent = this.winnerTemplate(winners);
  }

  makeLane(carPosition) {
    $(SELECTOR.CAR_PROGRESS).textContent = '';
    for (let i = 0; i < carPosition.length; i++) {
      $(SELECTOR.CAR_PROGRESS).insertAdjacentHTML(
        'beforeend',
        `<div id="car-check">
          <div id="car-progress-result-${i}">
          <div id="loader"></div>
          </div>
        </div>`
      );
    }
  }

  async renderProgress(carPosition) {
    this.makeLane(carPosition);
    return new Promise((resolve) => {
      const moveCarsTimer = setInterval(() => {
        carPosition.forEach((position, idx) => {
          this.renderArrow(position, idx, carPosition);
          if (carPosition.every((position) => position === 0)) {
            this.hideLoader();
            resolve('FINISHED');
            clearInterval(moveCarsTimer);
          }
        });
      }, TIMER.DELAY_MOVE);
    });
  }

  renderArrow(position, idx, carPosition) {
    if (position > 0) {
      $(`#car-progress-result-${idx}`).insertAdjacentHTML('afterbegin', '️️⬇️');
      carPosition[idx] = position - 1;
    }
  }

  hideLoader() {
    $$('#loader').forEach((loader) => (loader.style.display = 'none'));
  }

  renderInitial() {
    $(SELECTOR.GAME_RESTART).style.display = 'none';
    $(SELECTOR.CAR_NAMES).textContent = '';
    $(SELECTOR.CAR_RACING_WINNER).textContent = '';
    $(SELECTOR.CAR_PROGRESS).textContent = '';
    $(SELECTOR.CAR_NAMES_INPUT).value = '';
    $(SELECTOR.CAR_RACING_COUNT_INPUT).value = '';
    $(SELECTOR.CAR_RACING_COUNT_WRAPPER).style.display = 'none';
    $(SELECTOR.CAR_RACING_COUNT_BUTTON).disabled = false;
    $(SELECTOR.CAR_NAMES_BUTTON).disabled = false;
  }

  renderRestartButton() {
    $(SELECTOR.GAME_RESTART).style.display = 'block';
  }

  renderCarRacingInputBox() {
    $(SELECTOR.CAR_RACING_COUNT_WRAPPER).style.display = 'block';
  }

  disableButtons() {
    $(SELECTOR.CAR_NAMES_BUTTON).disabled = true;
    $(SELECTOR.CAR_RACING_COUNT_BUTTON).disabled = true;
  }
}
