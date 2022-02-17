import { DOM } from '../lib/constants.js';
import { selectDOM } from '../lib/utils.js';

class RacingCarGameView {
  constructor() {
    this.initDOM();
    this.initSpinner();
  }

  initDOM() {
    this.countInputForm = selectDOM(`#${DOM.COUNT_INPUT_FORM_ID}`);
    this.resultField = selectDOM(`#${DOM.RESULT_FIELD_ID}`);
    this.gameProgress = selectDOM(`#${DOM.GAME_PROGRESS_ID}`);
    this.winners = selectDOM(`#${DOM.WINNERS_ID}`);
    this.carNameBtn = selectDOM(`#${DOM.CAR_NAME_BTN_ID}`);
    this.countBtn = selectDOM(`#${DOM.COUNT_BTN_ID}`);
    this.spinner = selectDOM('.spinner');
  }

  initSpinner() {
    this.rotateSpinner();
    this.currentDegrees = 0;
    this.animationId = null;
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
    cancelAnimationFrame(this.animationId);
  }

  renderCountInputForm() {
    this.countInputForm.style.display = 'block';
  }

  disableInputButtons() {
    this.carNameBtn.disabled = true;
    this.countBtn.disabled = true;
  }

  rotateSpinner = () => {
    this.spinner.style.transform = `rotate(${this.currentDegrees}deg)`;
    this.currentDegrees += 10;
    this.animationId = requestAnimationFrame(this.rotateSpinner);
  };

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
