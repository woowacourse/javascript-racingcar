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

  showElement(className) {
    if (!document.querySelector(className)) {
      return;
    }
    const allElements = document.querySelectorAll(className)
    for (let i = 0; i < allElements.length; i++) {
      allElements[i].style.display = '';
    }
  }

  hideElement(className) {
    if (!document.querySelector(className)) {
      return;
    }
    const allElements = document.querySelectorAll(className)
    for (let i = 0; i < allElements.length; i++) {
      allElements[i].style.display = 'none';
    }
  }

  clearText(className) {
    document.querySelector(className).innerHTML = '';
  }

  clearInput(className) {
    document.querySelector(className).value = '';
  }

  showResult(cars) {
    this.showElement(CLASS_NAMES.PROGRESS_CONTAINER);

    document.querySelector(CLASS_NAMES.PROGRESS_CARS).innerHTML 
      = cars.map(car => `
          <div class="car-player-container">
            <div id="${car.name}" class="car-player mr-2">${car.name}</div>
            <div class="spinner-container">
              <div class="material spinner"></div>
            </div>
          </div>
        `,
      ).join('');
  }

  printProgress(car, isCarMoved) {
    this.showElement(CLASS_NAMES.SPINNER_CONTAINER, true);
    
    const carElement = document.querySelector(`#${car.name}`);

    setTimeout(() => {
      this.hideElement(CLASS_NAMES.SPINNER_CONTAINER, false);
      if (isCarMoved) {
        carElement.insertAdjacentHTML('afterend', `
          <div class="forward-icon mt-2">⬇️️</div>
        `)
      }
    }, 1000)
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

    setTimeout(() => {
      alert('축하합니다 🎉')
    }, 2000);
  }
}
