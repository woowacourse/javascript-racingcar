import { CLASS, STRING } from './constants.js';

export default class RacingUI {
  hideUI() {
    document.querySelector(CLASS.TRY_COUNT_FORM).classList.add(CLASS.HIDE);
    document.querySelector(CLASS.PROGRESS_CONTAINER).classList.add(CLASS.HIDE);
    document.querySelector(CLASS.RESULT_CONTAINER).classList.add(CLASS.HIDE);
  }

  clearUI() {
    document.querySelector(CLASS.PROGRESS_CARS).innerHTML = '';
    document.querySelector(CLASS.RESULT_CONTAINER).innerHTML = '';
    document.querySelector(CLASS.CAR_NAME_INPUT).value = '';
    document.querySelector(CLASS.TRY_COUNT_INPUT).value = '';
  }

  disableButtons() {
    document.querySelector(CLASS.CAR_NAME_BTN).disabled = true;
    document.querySelector(CLASS.TRY_COUNT_BTN).disabled = true;
  }

  enableButtons() {
    document.querySelector(CLASS.CAR_NAME_BTN).disabled = false;
    document.querySelector(CLASS.TRY_COUNT_BTN).disabled = false;
  }

  focusElement(className) {
    document.querySelector(className).focus();
  }

  showElement(className) {
    document.querySelector(className).classList.remove(CLASS.HIDE);
  }

  showProgress(cars) {
    this.showElement(CLASS.PROGRESS_CONTAINER);

    document.querySelector(CLASS.PROGRESS_CARS).innerHTML = cars
      .map(car => `
        <div>
          <div class="car-player mr-2">${car.name}</div>
          ${`<div class="forward-icon mt-2">${STRING.ARROW}</div>`.repeat(car.position)}
        </div>
      `,)
      .join('');
  }

  showWinners(winners) {
    this.showElement(CLASS.RESULT_CONTAINER);

    document.querySelector(CLASS.RESULT_CONTAINER).innerHTML = `
      <section>
        <h2>🏆 ${STRING.FINAL_WINNER}: ${winners.join(', ')} 🏆</h2>
        <div class="d-flex justify-center">
        <button type="button" class="btn btn-cyan restart-btn">${STRING.RESTART}</button>
        </div>
      </section>
    `;

    this.disableButtons();
  }
}