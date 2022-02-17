import { DOM } from '../lib/constants.js';
import { selectDOM } from '../lib/utils.js';

class RacingCarGameView {
  constructor() {
    this.initDOM();
  }

  initDOM() {
    this.countInputForm = selectDOM(`#${DOM.COUNT_INPUT_FORM_ID}`);
    this.resultField = selectDOM(`#${DOM.RESULT_FIELD_ID}`);
    this.gameProgress = selectDOM(`#${DOM.GAME_PROGRESS_ID}`);
    this.winners = selectDOM(`#${DOM.WINNERS_ID}`);
    this.carNameBtn = selectDOM(`#${DOM.CAR_NAME_BTN_ID}`);
    this.countBtn = selectDOM(`#${DOM.COUNT_BTN_ID}`);
  }

  initSpinner() {
    this.rotateSpinner();
    this.currentDegrees = 0;
    this.animationId = null;
  }

  renderGameStart(cars) {
    const progressTemplate = cars.reduce(
      (acc, car) => `${acc}${RacingCarGameView.generateProgressTemplate(car)}`,
      ''
    );
    this.gameProgress.innerHTML = progressTemplate;
    this.spinners = document.querySelectorAll(`.${DOM.SPINNER_CLASS}`);
    this.initSpinner();
  }

  renderRoundResult(moved, count, finishedCount) {
    const spinnerArray = Array.from(this.spinners);
    spinnerArray.forEach((spinner) => {
      if (moved.includes(spinner.dataset.carId)) {
        spinner.insertAdjacentElement('beforebegin', RacingCarGameView.generateStepTemplate());
      }
      if (count === finishedCount) {
        spinner.remove();
        cancelAnimationFrame(this.animationId);
      }
    });
  }

  renderGameResults(winners) {
    const winnersTemplate = RacingCarGameView.generateWinnersTemplate({
      winners,
    });

    this.winners.innerHTML = winnersTemplate;
    cancelAnimationFrame(this.animationId);

    setTimeout(() => alert(`🎉축하합니다! 우승자는 ${winners.join(',')}입니다!🎉`), 2000);
  }

  renderCountInputForm() {
    this.countInputForm.style.display = 'block';
  }

  disableInputButtons() {
    this.carNameBtn.disabled = true;
    this.countBtn.disabled = true;
  }

  rotateSpinner = () => {
    this.spinners.forEach((spinner) => {
      spinner.style.transform = `rotate(${this.currentDegrees % 360}deg)`;
    });

    this.currentDegrees += 10;
    this.animationId = requestAnimationFrame(this.rotateSpinner);
  };

  static generateProgressTemplate({ name, id }) {
    return `
    <div class="${DOM.CAR_PROGRESS_CLASS}">
      <div class="${DOM.CAR_NAME_CLASS}">${name}</div>
      <div class="spinner" data-car-id="${id}"></div>
      </div>
      `;
  }

  static generateStepTemplate() {
    const stepElement = document.createElement('div');
    stepElement.className = DOM.STEP_CLASS;
    stepElement.textContent = '⬇️️';
    return stepElement;
  }

  static generateWinnersTemplate({ winners }) {
    return `<h2 id="${DOM.WINNER_CONTAINER_ID}">🏆최종 승리자:<span id="${
      DOM.WINNER_NAME_ID
    }">${winners.join(',')}</span>🏆</h2>
      <button id="${DOM.RESTART_BTN_ID}">다시 시작하기</button> `;
  }
}
export default RacingCarGameView;
