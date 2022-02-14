import { DOM, ID_PREFIX } from '../lib/constants.js';
import { findElement } from '../lib/utils.js';

class RacingCarGameView {
  constructor() {
    this.initDOM();
  }

  initDOM() {
    this.countInputForm = findElement(ID_PREFIX, DOM.COUNT_INPUT_FORM_ID);
    this.resultField = findElement(ID_PREFIX, DOM.RESULT_FIELD_ID);
    this.gameProgress = findElement(ID_PREFIX, DOM.GAME_PROGRESS_ID);
    this.winners = findElement(ID_PREFIX, DOM.WINNERS_ID);
    this.carNameBtn = findElement(ID_PREFIX, DOM.CAR_NAME_BTN_ID);
    this.countBtn = findElement(ID_PREFIX, DOM.COUNT_BTN_ID);
  }

  renderResults(cars, winners) {
    const progressTemplate = cars.reduce(
      (acc, car) => `${acc}${RacingCarGameView.generateProgressTemplate(car)}`,
      ''
    );
    const winnersTemplate = RacingCarGameView.generateWinnersTemplate({
      winners,
    });

    this.gameProgress.innerHTML = progressTemplate;
    this.winners.innerHTML = winnersTemplate;
  }

  renderCountInputForm() {
    this.countInputForm.style.display = 'block';
  }

  disableInputButtons() {
    this.carNameBtn.disabled = true;
    this.countBtn.disabled = true;
  }

  static generateProgressTemplate({ name, progress }) {
    return `
    <div class="${DOM.CAR_PROGRESS_CLASS}">
      <div class="${DOM.CAR_NAME_CLASS}">${name}</div>
      ${`<div class="${DOM.STEP_CLASS}">⬇️️</div>`.repeat(progress)}
    </div>
  `;
  }

  static generateWinnersTemplate({ winners }) {
    return `<h2 id="${DOM.WINNER_CONTAINER_ID}">🏆최종 승리자:<span id="${
      DOM.WINNER_NAME_ID
    }">${winners.join(',')}</span>🏆</h2>
      <button id="${DOM.RESTART_BTN_ID}">다시 시작하기</button> `;
  }
}
export default RacingCarGameView;
