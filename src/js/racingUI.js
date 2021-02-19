import { ELEMENT_CLASS_NAME, TEXT_CONTENT } from './constants.js';
import { delay } from './util.js';

export default class RacingUI {
  hideUI() {
    document.querySelector(ELEMENT_CLASS_NAME.TRY_COUNT_FORM).classList.add(ELEMENT_CLASS_NAME.HIDE);
    document.querySelector(ELEMENT_CLASS_NAME.PROGRESS_CONTAINER).classList.add(ELEMENT_CLASS_NAME.HIDE);
    document.querySelector(ELEMENT_CLASS_NAME.RESULT_CONTAINER).classList.add(ELEMENT_CLASS_NAME.HIDE);
  }

  clearUI() {
    document.querySelector(ELEMENT_CLASS_NAME.PROGRESS_CARS).innerHTML = '';
    document.querySelector(ELEMENT_CLASS_NAME.RESULT_CONTAINER).innerHTML = '';
    document.querySelector(ELEMENT_CLASS_NAME.CAR_NAME_INPUT).value = '';
    document.querySelector(ELEMENT_CLASS_NAME.TRY_COUNT_INPUT).value = '';
  }

  disableInputs() {
    document.querySelector(ELEMENT_CLASS_NAME.CAR_NAME_BTN).disabled = true;
    document.querySelector(ELEMENT_CLASS_NAME.TRY_COUNT_BTN).disabled = true;
    document.querySelector(ELEMENT_CLASS_NAME.CAR_NAME_INPUT).disabled = true;
    document.querySelector(ELEMENT_CLASS_NAME.TRY_COUNT_INPUT).disabled = true;
  }

  enableInputs() {
    document.querySelector(ELEMENT_CLASS_NAME.CAR_NAME_BTN).disabled = false;
    document.querySelector(ELEMENT_CLASS_NAME.TRY_COUNT_BTN).disabled = false;
    document.querySelector(ELEMENT_CLASS_NAME.CAR_NAME_INPUT).disabled = false;
    document.querySelector(ELEMENT_CLASS_NAME.TRY_COUNT_INPUT).disabled = false;
  }

  focusElement(className) {
    if (className) {
      document.querySelector(className).focus();
    }
  }

  showElement(className) {
    if (className) {
      document.querySelector(className).classList.remove(ELEMENT_CLASS_NAME.HIDE);
    }
  }
  
  showProgressBars(cars) {
    this.showElement(ELEMENT_CLASS_NAME.PROGRESS_CONTAINER);

    document.querySelector(ELEMENT_CLASS_NAME.PROGRESS_CARS).innerHTML = cars
      .map(car => `
        <div class="${car.name}">
          <div class="car-player mr-2">${car.name}</div>
          <div class="d-flex justify-center mt-4">
            <div class="relative spinner-container">
              <span class="material spinner"></span>
            </div>
          </div>
        </div>
      `,)
      .join('');
  }

  async showRacingResult(cars, winners) {
    for await (let car of cars) {
      await delay(() => {
        document.querySelector(`.${car.name}`).innerHTML = `
          <div class="car-player mr-2">${car.name}</div>
          ${`<div class="forward-icon mt-2">${TEXT_CONTENT.ARROW}</div>`.repeat(car.position)}
        `;
      }, 1);
    }
  }

  showWinners(winners) {
    return delay(() => {
      alert(`우승자는 ${winners.join(', ')} 입니다! 축하합니다!`);
      this.showElement(ELEMENT_CLASS_NAME.RESULT_CONTAINER);

      document.querySelector(ELEMENT_CLASS_NAME.RESULT_CONTAINER).innerHTML = `
        <section>
          <h2>🏆 ${TEXT_CONTENT.FINAL_WINNER}: ${winners.join(', ')} 🏆</h2>
          <div class="d-flex justify-center">
            <button type="button" class="btn btn-cyan restart-btn">${TEXT_CONTENT.RESTART}</button>
          </div>
        </section>
      `;
    }, 2);
  }
}