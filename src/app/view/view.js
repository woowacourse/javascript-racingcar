import { DOM, WINNER_ALERT_TIMEOUT_AMOUNT } from '../../lib/constants.js';
import { createDivWithClass, createElementWithId, selectDOM } from '../../lib/utils.js';

class RacingCarGameView {
  constructor() {
    this.#initDOM();
  }

  #initDOM() {
    this.countInputForm = selectDOM(`#${DOM.COUNT_INPUT_FORM_ID}`);
    this.resultField = selectDOM(`#${DOM.RESULT_FIELD_ID}`);
    this.gameProgress = selectDOM(`#${DOM.GAME_PROGRESS_ID}`);
    this.winners = selectDOM(`#${DOM.WINNERS_ID}`);
    this.carNameBtn = selectDOM(`#${DOM.CAR_NAME_BTN_ID}`);
    this.countBtn = selectDOM(`#${DOM.COUNT_BTN_ID}`);
  }

  #initSpinner() {
    this.rotateSpinner();
    this.currentDegrees = 0;
  }

  renderGameStart(cars) {
    const progressTemplate = cars.map((car) => RacingCarGameView.generateProgressTemplate(car));

    this.gameProgress.append(...progressTemplate);
    this.spinners = this.gameProgress.querySelectorAll(`.${DOM.SPINNER_CLASS}`);
    this.stepContainers = this.gameProgress.querySelectorAll(`.${DOM.STEP_CONTAINER_CLASS}`);
    this.#initSpinner();
  }

  renderRoundResult(moved, count, finishedCount) {
    const stepContainersArray = Array.from(this.stepContainers);
    stepContainersArray.forEach((container) => {
      if (moved.includes(container.dataset.carId)) {
        container.append(RacingCarGameView.generateStepTemplate());
      }
    });
    if (count === finishedCount) {
      this.removeSpinner();
    }
  }

  removeSpinner() {
    cancelAnimationFrame(this.animationId);
    const spinnerArray = Array.from(this.spinners);
    spinnerArray.forEach((spinner) => {
      spinner.remove();
    });
  }

  renderGameResults(winnersArray) {
    const winnersTemplate = RacingCarGameView.generateWinnersTemplate({
      winnersArray,
    });
    this.winners.append(...winnersTemplate);

    setTimeout(
      () => alert(RacingCarGameView.generateWinnerString(winnersArray)),
      WINNER_ALERT_TIMEOUT_AMOUNT
    );
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

  static generateWinnerString(winnerNames) {
    return `🎉축하합니다! 우승자는 ${winnerNames.join(',')}입니다!🎉`;
  }

  static generateProgressTemplate({ name, id }) {
    const progressElement = createDivWithClass(DOM.CAR_PROGRESS_CLASS);
    const nameElement = createDivWithClass(DOM.CAR_NAME_CLASS);
    nameElement.textContent = name;
    const stepContainerElement = createDivWithClass(DOM.STEP_CONTAINER_CLASS);
    stepContainerElement.dataset.carId = id;
    progressElement.append(
      nameElement,
      stepContainerElement,
      RacingCarGameView.generateSpinnerElement()
    );
    return progressElement;
  }

  static generateSpinnerElement() {
    return createDivWithClass(DOM.SPINNER_CLASS);
  }

  static generateStepTemplate() {
    const stepElement = document.createElement('div');
    stepElement.className = DOM.STEP_CLASS;
    stepElement.textContent = '⬇️️';
    return stepElement;
  }

  static generateWinnersTemplate({ winnersArray }) {
    const winnerContainerElement = createElementWithId({ tag: 'h2', id: DOM.WINNER_CONTAINER_ID });
    const winnerNamesElement = createElementWithId({ tag: 'span', id: DOM.WINNER_NAME_ID });
    winnerNamesElement.textContent = winnersArray.join(',');
    winnerContainerElement.append('🏆최종 승리자:', winnerNamesElement, '🏆');

    const restartButton = createElementWithId({ tag: 'button', id: DOM.RESTART_BTN_ID });
    restartButton.textContent = '다시 시작하기';

    return [winnerContainerElement, restartButton];
  }
}
export default RacingCarGameView;
