import { CLASS } from './constants.js';

export default class RacingUI {
  hideUI() {
    document.querySelector(CLASS.TRY_COUNT_FORM).style.display = 'none';
    document.querySelector(CLASS.PROGRESS_CONTAINER).style.display = 'none';
    document.querySelector(CLASS.RESULT_CONTAINER).style.display = 'none';
  }

  clearUI() {
    document.querySelector(CLASS.PROGRESS_CARS).innerHTML = '';
    document.querySelector(CLASS.RESULT_CONTAINER).innerHTML = '';
    document.querySelector(CLASS.CAR_NAME).value = '';
    document.querySelector(CLASS.TRY_COUNT).value = '';
  }

  showElement(className) {
    document.querySelector(className).style.display = '';
  }

  showProgress(cars) {
    this.showElement(CLASS.PROGRESS_CONTAINER);

    document.querySelector(CLASS.PROGRESS_CARS).innerHTML = cars
      .map(car => `
        <div>
          <div class="car-player mr-2">${car.name}</div>
          ${`<div class="forward-icon mt-2">⬇️️</div>`.repeat(car.position)}
        </div>
      `,)
      .join('');
  }

  showWinners(winners) {
    this.showElement(CLASS.RESULT_CONTAINER);

    document.querySelector(CLASS.RESULT_CONTAINER).innerHTML = `
      <section>
        <h2>🏆 최종 우승자: ${winners.join(', ')} 🏆</h2>
        <div class="d-flex justify-center">
        <button type="button" class="btn btn-cyan restart-btn">다시 시작하기</button>
        </div>
      </section>
    `;
  }
}