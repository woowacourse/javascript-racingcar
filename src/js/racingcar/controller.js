import RacingCar from './racingCar.js';
import RacingCarModel from './model.js';
import RacingCarView from './view.js';
import {
  isCarExist,
  isCountExist,
  isCarValid,
  isCountValid,
} from '../utils/vaild.js';
import {getQuerySelector} from '../utils/util.js';

class RacingCarController {
  constructor() {
    this.cars = [];
    this.count = 0;
    this.model = null;
    this.view = new RacingCarView();
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
    const $carInput = getQuerySelector('#car-input');

    return $carInput.value.split(',').map((car) => car.trim());
  }

  getCountInput() {
    return getQuerySelector('#count-input').value;
  }

  manageCars() {
    if (isCarExist(this.cars)) {
      return;
    }

    const carNames = this.getCarsInput();
    if (isCarValid(carNames)) {
      this.cars = carNames.map((carName) => new RacingCar(carName));
      this.view.renderCount();
      this.handleCount();
    }
  }

  manageCount() {
    if (isCountExist(this.count)) {
      return;
    }

    const count = this.getCountInput();
    if (isCountValid(count)) {
      this.count = count;
      this.proceedGame();
    }
  }

  proceedGame() {
    this.model = new RacingCarModel(this.cars, this.count);
    this.model.playRacingCarGame();
    this.view.renderProcess(this.model.getCars());
    this.showResult();
  }

  showResult() {
    const winners = this.model.getWinners();
    this.view.renderResult(winners);
    this.handleReset();
  }

  handleCars() {
    getQuerySelector('#car-btn').addEventListener('click', () => {
      this.manageCars();
    });
  }

  handleCount() {
    getQuerySelector('#count-btn').addEventListener('click', () => {
      this.manageCount();
    });
  }

  handleReset() {
    getQuerySelector('#reset-btn').addEventListener('click', () => {
      this.reset();
    });
  }
}

export default RacingCarController;
