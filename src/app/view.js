import { DOM, ID_PREFIX } from '../lib/constants.js';
import { findElement } from '../lib/utils.js';

class RacingCarGameView {
  constructor() {
    this.initDOM();
  }

  initDOM() {
    this.countInputForm = findElement(ID_PREFIX, DOM.COUNT_INPUT_FORM_ID);
    this.inputField = findElement(ID_PREFIX, DOM.INPUT_FIELD);
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

  hideCountInputForm() {
    this.countInputForm.style.display = 'none';
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

  init() {
    this.initInputField();
    this.initResultField();
  }

  initInputField() {
    this.inputField.innerHTML = `<form id="car-name-input-form">
    <label for="car-name-input">5자 이하의 자동차 이름을 콤마로 구분하여 입력해주세요.</label>
    <div id="car-name-input-field">
      <input id="car-name-input" type="text" />
      <button id="car-name-btn">확인</button>
    </div>
  </form>  <form id="count-input-form">
    <label for="count-input">시도할 횟수를 입력해주세요.</label>
    <div id="count-input-field">
      <input id="count-input" type="number" />
      <button id="count-btn">확인</button>
    </div>
  </form>`;
  }

  initResultField() {
    this.resultField.innerHTML = `<section id="game-progress">
    </section>
    <section id="winners">
    </section>`;
  }
}
export default RacingCarGameView;
