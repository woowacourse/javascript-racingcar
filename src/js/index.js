import Car from './models/Car.js';
import RacingUI from './racingUI.js';
import { ELEMENT_CLASS_NAME } from './constants.js';
import { 
  createCarNameAlertMessage,
  createTryCountAlertMessage,
} from './validation.js';
import { delay } from './util.js';
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

  handleCarNameInput() {
    const carNameInput = document.querySelector(ELEMENT_CLASS_NAME.CAR_NAME_INPUT).value;
    const carNamesArr = carNameInput.split(',').map(name => name.trim());

    const alertMessage = createCarNameAlertMessage(carNameInput, carNamesArr);
    if (alertMessage) {
      alert(alertMessage);
      return;
    }

    this.createCars(carNamesArr);
    
    this.UIController.showElement(ELEMENT_CLASS_NAME.TRY_COUNT_FORM);
    this.UIController.focusElement(ELEMENT_CLASS_NAME.TRY_COUNT_INPUT);
  }

  async handleTryCountInput() {
    const tryCountInput = document.querySelector(ELEMENT_CLASS_NAME.TRY_COUNT_INPUT).value;

    const alertMessage = createTryCountAlertMessage(tryCountInput);
    if (alertMessage) {
      alert(alertMessage);
      return;
    }

    this.tryCount = Number(tryCountInput);
    this.moveCars();
    
    this.UIController.disableInputs();
    this.UIController.showProgressBars(this.cars);
    await this.UIController.showRacingResult(this.cars);
    await delay(2);
    this.UIController.showWinners(this.createWinnerNames());
  }

  createCars(carNamesArr) { 
    const carNames = carNamesArr.map(carName => new Car(carName.trim()));
    this.cars.push(...carNames);
  }

  moveCars() {
    for (let i = 0; i < this.tryCount; i++) {
      this.cars.forEach(car => car.move());
    }
  }

  createWinnerNames() {
    return this.cars.reduce((winners, car) => {
      if (winners.length === 0 || car.position > winners[0].position) {
        return [car];
      }

      if (car.position === winners[0].position) {
        winners.push(car);
      } 

      return winners;
    }, []).map(winner => winner.name);
  }

  restartGame() {
    this.UIController.clearUI();
    this.UIController.hideUI();
    this.UIController.enableInputs();
    this.resetValues();
  }

  addListeners() {
    document.querySelector(ELEMENT_CLASS_NAME.CAR_NAME_BTN).addEventListener('click', this.handleCarNameInput.bind(this));
    document.querySelector(ELEMENT_CLASS_NAME.CAR_NAME_INPUT).addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        this.handleCarNameInput.bind(this)();
      }
    });
    document.querySelector(ELEMENT_CLASS_NAME.TRY_COUNT_BTN).addEventListener('click', this.handleTryCountInput.bind(this));
    document.querySelector(ELEMENT_CLASS_NAME.TRY_COUNT_INPUT).addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        this.handleTryCountInput.bind(this)();
      }
    });
    document.body.addEventListener('click', e => {
      if(e.target.closest(ELEMENT_CLASS_NAME.RESTART_BTN)) {
        this.restartGame.bind(this)();
      }
    });
  }
}

new Racing();
