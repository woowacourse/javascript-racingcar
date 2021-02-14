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
    this.model = null;
    this.view = new RacingCarView();
  }

  start() {
    this.reset();
    this.handleCars();
  }

  reset() {
    this.model = null;
    this.cars = [];
    this.view.reset();
  }

  getCarsInput() {
    const $carInput = getQuerySelector('#car-input');

    return $carInput.value.split(',').map((car) => car.trim());
  }

  getCountInput() {
    return getQuerySelector('#count-input').value;
  }

  getWinners() {
    const cars = this.model.getCars();
    const maxForward = Math.max(...cars.map((car) => car.forward));

    return cars
      .filter((car) => car.forward === maxForward)
      .map((car) => car.name);
  }

  playRacingCarGame() {
    for (let i = 0; i < this.model.getCount(); i++) {
      this.model.playOnce();
    }
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
    if (isCountExist(this.model && this.model.getCount())) {
      return;
    }

    const count = this.getCountInput();
    if (isCountValid(count)) {
      this.model = new RacingCarModel(this.cars, count);
      this.playRacingCarGame();
      this.view.renderProcess(this.model.getCars());
      this.showResult();
    }
  }

  showResult() {
    const winners = this.getWinners();
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
