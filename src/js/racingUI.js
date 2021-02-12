import { CLASS_NAMES } from './constants.js';

export default class RacingUI {
  hideUI() {
    this.hideElement(CLASS_NAMES.TRY_COUNT_FORM);
    this.hideElement(CLASS_NAMES.PROGRESS_CONTAINER);
    this.hideElement(CLASS_NAMES.RESULT_CONTAINER);
  }

  clearUI() {
    this.clearText(CLASS_NAMES.PROGRESS_CARS);
    this.clearText(CLASS_NAMES.RESULT_CONTAINER);
    this.clearInput(CLASS_NAMES.CAR_NAME);
    this.clearInput(CLASS_NAMES.TRY_COUNT);
  }

  hideElement(className) {
    document.querySelector(className).style.display = 'none';
  }

  clearText(className) {
    document.querySelector(className).innerHTML = '';
  }

  clearInput(className) {
    document.querySelector(className).value = '';
  }

  showElement(className) {
    if (!document.querySelector(className)) {
      return;
    }
    document.querySelector(className).style.display = '';
  }

  showProgress(cars) {
    this.showElement(CLASS_NAMES.PROGRESS_CONTAINER);

    document.querySelector(CLASS_NAMES.PROGRESS_CARS).innerHTML 
      = cars.map(car => `
          <div>
            <div class="car-player mr-2">${car.getName()}</div>
            ${`<div class="forward-icon mt-2">⬇️️</div>`.repeat(car.getPosition())}
          </div>
        `,
      ).join('');
  }

  showWinners(winners) {
    this.showElement(CLASS_NAMES.RESULT_CONTAINER);

    document.querySelector(CLASS_NAMES.RESULT_CONTAINER).innerHTML = `
      <section>
        <h2>🏆 최종 우승자: ${winners.join(', ')} 🏆</h2>
        <div class="d-flex justify-center">
        <button type="button" class="btn btn-cyan restart-btn">다시 시작하기</button>
        </div>
      </section>
    `;
  }
}
