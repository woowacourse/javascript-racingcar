import RacingCar from './model/racingCar.js';
import RacingCarModel from './model/racingCarModel.js';
import RacingCarView from './view.js';
import {isCarExist} from '../validations/carValid.js';
import {
  getCarNameErrorMessage,
  getCountErrorMessage,
} from '../validations/racingCarValid.js';
import {isCountExist} from '../validations/countValid.js';
import {$} from '../utils/dom.js';
import {ERROR_MESSAGE} from '../constants/message.js';
import {wait} from '../utils/async.js';

class RacingCarController {
  constructor() {
    this.cars = [];
    this.count = 0;
    this.model = null;
    this.view = new RacingCarView();
    this.errorMessage = null;
  }

  start() {
    this.reset();
    this.handleCars();
  }

  reset() {
    this.cars = [];
    this.count = 0;
    this.model = null;
    this.view.reset();
  }

  getCarsInput() {
    const $carInput = $('#car-input');

    return $carInput.value.split(',').map((car) => car.trim());
  }

  getCountInput() {
    return $('#count-input').value;
  }

  manageCars() {
    if (isCarExist(this.cars)) {
      return this.view.showMessage(ERROR_MESSAGE.CAR_EXIST);
    }

    const carNames = this.getCarsInput();
    if ((this.errorMessage = getCarNameErrorMessage(carNames))) {
      return this.view.showMessage(this.errorMessage);
    }

    this.cars = carNames.map((carName) => new RacingCar(carName));
    this.view.renderCount();
    this.handleCount();
  }

  manageCount() {
    if (isCountExist(this.count)) {
      return this.view.showMessage(ERROR_MESSAGE.COUNT_EXIST);
    }

    const count = this.getCountInput();
    if ((this.errorMessage = getCountErrorMessage(count))) {
      return this.view.showMessage(this.errorMessage);
    }

    this.count = Number(count);
    this.setBeforeProceedingGame();
  }

  setBeforeProceedingGame() {
    this.model = new RacingCarModel(this.cars);
    this.view.renderProcess(this.model.getCars());
    this.proceedGame();
  }

  proceedGame() {
    let count = 0;
    const interval = setInterval(() => {
      count++;
      this.model.playRacingCarGameOnce();
      this.view.renderProcess(this.model.getCars());
      if (this.count === count) {
        clearInterval(interval);
        this.view.hideSpinnerAll();
        this.showResult();
      }
    }, 1000);
  }

  async showResult() {
    const winners = this.model.getWinners();
    this.view.renderResult(winners);
    await wait(2000);
    this.view.showMessage(
      `🎉축하합니다. ${winners.join(', ')}가(이) 승리했습니다.🎉`,
    );
    this.handleReset();
  }

  handleCars() {
    $('#car-btn').addEventListener('click', () => {
      this.manageCars();
    });
  }

  handleCount() {
    $('#count-btn').addEventListener('click', () => {
      this.manageCount();
    });
  }

  handleReset() {
    $('#reset-btn').addEventListener('click', () => {
      this.reset();
    });
  }
}

export default RacingCarController;
