import RacingCarModel from './model.js';
import RacingCarView from './view.js';
import {
  isCarExist,
  isCountExist,
  isCarValid,
  isCountValid,
} from '../utils/vaild.js';
import {generateRandomNumber, getQuerySelector} from '../utils/util.js';
import {INIT, GAME} from '../constants/constant.js';

class RacingCarController {
  constructor() {
    this.model = new RacingCarModel();
    this.view = new RacingCarView();
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

  // T면 1(전진), F면 0(스톱) 반환
  goStop() {
    const randomNumber = generateRandomNumber(0, 9);

    return randomNumber >= GAME.FORWARD_STANDARD_NUM
      ? GAME.GO_NUM
      : GAME.STOP_NUM;
  }

  play(cars) {
    const newCars = cars.map((car) => ({
      ...car,
      forward: car.forward + this.goStop(),
    }));

    return newCars;
  }

  startGame() {
    let cars = this.model.getCars();
    for (let i = 0; i < this.model.getCount(); i++) {
      cars = this.play(cars);
    }
    this.model.setCars(cars);
  }

  manageCars() {
    if (isCarExist(this.model.getCars())) {
      return;
    }

    const carNames = this.getCarsInput();
    if (isCarValid(carNames)) {
      const cars = carNames.map((carName) => ({
        name: carName,
        forward: INIT.FORWARD,
      }));

      this.model.setCars(cars);
      this.view.renderCount();
      this.handleCount();
    }
  }

  manageCount() {
    if (isCountExist(this.model.getCount())) {
      return;
    }

    const count = this.getCountInput();
    if (isCountValid(count)) {
      this.model.setCount(parseInt(count, 10));
      this.startGame();
      this.view.renderProcess(this.model.getCars());
      this.showResult();
    }
  }

  showResult() {
    const winners = this.getWinners();
    this.view.renderResult(winners);
    this.handleReset();
  }

  start() {
    this.reset();
    this.handleCars();
  }

  reset() {
    this.model.setCars(INIT.CARS);
    this.model.setCount(INIT.COUNT);
    this.view.reset();
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
