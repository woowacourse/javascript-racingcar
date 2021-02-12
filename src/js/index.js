import Car from './models/Car.js';
import RacingUI from './racingUI.js';
import { ELEMENT_CLASS_NAME } from './constants.js';
import { 
  isCarNameEmpty, 
  isCarNamesDuplicate,
  isCarNameOverFive, 
  isTryCountNotValid 
} from './validation.js';
export default class Racing {
  constructor() {
    this.UIController = new RacingUI();
    
    this.resetValues();
    this.UIController.hideUI();
    this.addListeners();
  }

  resetValues() {
    this.cars = [];
    this.tryCount = 0;
  }

  getCarNames() {
    const carNameInput = document.querySelector(ELEMENT_CLASS_NAME.CAR_NAME_INPUT).value;

    if (isCarNameEmpty(carNameInput)) return;
    if (isCarNamesDuplicate(carNameInput)) return;

    for (let name of carNameInput.split(',')) {
      if (isCarNameOverFive(name.trim().length)) return;

      const car = new Car(name.trim());
      this.cars.push(car);
    }

    this.UIController.showElement(ELEMENT_CLASS_NAME.TRY_COUNT_FORM);
    this.UIController.focusElement(ELEMENT_CLASS_NAME.TRY_COUNT_INPUT);
  }

  getTryCount() {
    const tryCountInput = document.querySelector(ELEMENT_CLASS_NAME.TRY_COUNT_INPUT).value;
    const tryCountNumber = Number(tryCountInput);

    if (isTryCountNotValid(tryCountInput, tryCountNumber)) return;

    this.tryCount = tryCountNumber;
    this.moveCars();
    this.getWinners();
  }

  moveCars() {
    for (let i = 0; i < this.tryCount; i++) {
      for (let car of this.cars) {
        car.move();
      }
    }

    this.UIController.showProgress(this.cars);
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

    this.UIController.showWinners(winners);
    document.querySelector(ELEMENT_CLASS_NAME.RESTART_BTN).addEventListener('click', this.restartGame.bind(this));
  }

  restartGame() {
    this.UIController.clearUI();
    this.UIController.hideUI();
    this.UIController.enableButtons();
    this.resetValues();
  }

  addListeners() {
    document.querySelector(ELEMENT_CLASS_NAME.CAR_NAME_BTN).addEventListener('click', this.getCarNames.bind(this));
    document.querySelector(ELEMENT_CLASS_NAME.CAR_NAME_INPUT).addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        this.getCarNames.bind(this)();
      }
    });
    document.querySelector(ELEMENT_CLASS_NAME.TRY_COUNT_BTN).addEventListener('click', this.getTryCount.bind(this));
    document.querySelector(ELEMENT_CLASS_NAME.TRY_COUNT_INPUT).addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        this.getTryCount.bind(this)();
      }
    });
  }
}

new Racing();
