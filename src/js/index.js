import Car from './models/Car.js';
import { returnAlert } from './utils.js';
import { ALERT, CLASS } from './constants.js';
export default class Racing {
  constructor() {
    this.reset();
    this.addListeners();
  }

  reset() {
    this.cars = [];
    this.tryCount = 0;

    document.querySelector(CLASS.TRY_COUNT_FORM).style.display = 'none';
    document.querySelector(CLASS.PROGRESS_CONTAINER).style.display = 'none';
    document.querySelector(CLASS.RESULT_CONTAINER).style.display = 'none';
  }

  getCarNames() {
    const carNameInput = document.querySelector(CLASS.CAR_NAME).value;
    if (!carNameInput) {
      returnAlert(ALERT.CAR_NAME_EMPTY);
    }
    for (let name of carNameInput.split(',')) {
      if (name.trim().length > 5) {
        returnAlert(ALERT.CAR_NAME_OVER_FIVE);
      }
      const car = new Car(name.trim());
      this.cars.push(car);
    }

    document.querySelector(CLASS.TRY_COUNT_FORM).style.display = 'block';
  }

  getTryCount() {
    const tryCountInput = document.querySelector(CLASS.TRY_COUNT).value;
    const tryCountNumber = Number(tryCountInput);
    if (!tryCountInput) {
      returnAlert(ALERT.TRY_COUNT_EMPTY);
    } else if (tryCountNumber <= 0) {
      returnAlert(ALERT.TRY_COUNT_NEG);
    } else if (tryCountNumber !== Math.floor(tryCountNumber)) {
      returnAlert(ALERT.TRY_COUNT_NOT_INT);
    }
    this.tryCount = tryCountNumber;
    this.moveCars();
  }

  moveCars() {
    for (let i = 0; i < this.tryCount; i++) {
      for (let car of this.cars) {
        car.move();
      }
    }
    this.showProgress();
  }

  showProgress() {
    document.querySelector(CLASS.PROGRESS_CONTAINER).style.display = '';

    document.querySelector(CLASS.PROGRESS_CARS).innerHTML = this.cars
      .map(
        car => `
        <div>
          <div class="car-player mr-2">${car.name}</div>
          ${`<div class="forward-icon mt-2">⬇️️</div>`.repeat(car.position)}
        </div>
      `,
      )
      .join('');

    this.showWinners();
  }

  showWinners() {
    document.querySelector(CLASS.RESULT_CONTAINER).style.display = '';

    const winners = this.getWinners();
    document.querySelector(CLASS.RESULT_CONTAINER).innerHTML = `
      <section>
        <h2>🏆 최종 우승자: ${winners.join(', ')} 🏆</h2>
        <div class="d-flex justify-center">
          <button type="button" class="btn btn-cyan restart-btn">다시 시작하기</button>
        </div>
      </section>
    `;

    document
      .querySelector(CLASS.RESTART_BTN)
      .addEventListener('click', this.restartGame.bind(this));
  }

  getWinners() {
    let maxPosition = 0;
    const winners = this.cars.reduce((winners, car) => {
      if (car.position === maxPosition) {
        winners.push(car.name);
      } else if (car.position > maxPosition) {
        winners = [car.name];
        maxPosition = car.position;
      }
      return winners;
    }, []);

    return winners;
  }

  restartGame() {
    document.querySelector(CLASS.PROGRESS_CARS).innerHTML = '';
    document.querySelector(CLASS.RESULT_CONTAINER).innerHTML = '';
    document.querySelector(CLASS.CAR_NAME).value = '';
    document.querySelector(CLASS.TRY_COUNT).value = '';

    this.reset();
  }

  addListeners() {
    document
      .querySelector(CLASS.CAR_NAME_BTN)
      .addEventListener('click', this.getCarNames.bind(this));
    document
      .querySelector(CLASS.TRY_COUNT_BTN)
      .addEventListener('click', this.getTryCount.bind(this));
  }
}

new Racing();
