import Car from './Car.js';
import { ID, MESSAGE } from './constants.js';
import { getElement, changeActivity } from './utils/dom.js';
import { removeAllChildNodes } from './view.js';
import {
  parseCarName,
  validateCarNameLength,
  validateDuplicateCarName,
  validateRacingCount,
  startRacing, 
} from './utils/index.js';
class CarRacing {
  constructor() {
    this.cars = [];
    this.bindEvents();
  }

  bindEvents() {
    getElement(ID.CAR_NAMES_FORM).addEventListener('submit', (event)=>{
      event.preventDefault();
      this.onSubmitCarName(getElement(ID.CAR_NAMES_INPUT).value);
    })

    getElement(ID.RACING_COUNT_FORM).addEventListener('submit', (event)=>{
      event.preventDefault();
      this.onSubmitRacingCount(getElement(ID.RACING_COUNT_INPUT).value);
    })

    getElement(ID.RESTART_BUTTON).addEventListener('click', ()=>{
      this.onClickRestart();
    })
  }

  onSubmitCarName(names) {
    const carNames = parseCarName(names);
    if (!validateCarNameLength(carNames)) {
      return alert(MESSAGE.WRONG_NAME_LENGTH);
    }
    if (!validateDuplicateCarName(carNames)) {
      return alert(MESSAGE.DUPLICATE_NAME);
    }
    getElement(ID.RACING_COUNT_INPUT).focus();
    this.cars = carNames.map(name => new Car(name));

    changeActivity([ID.CAR_NAMES_INPUT, ID.CAR_NAMES_SUBMIT]);
  }

  onSubmitRacingCount(count) {
    if (!this.cars.length) {
      return alert(MESSAGE.NO_CAR);
    }
    if (!validateRacingCount(count)) {
      return alert(MESSAGE.WRONG_COUNT);
    }

    changeActivity([ID.RACING_COUNT_INPUT, ID.RACING_COUNT_SUBMIT]);
    startRacing(count, this.cars)
  }

  onClickRestart() {
    getElement(ID.CAR_NAMES_INPUT).value = '';
    getElement(ID.RACING_COUNT_INPUT).value = '';
    removeAllChildNodes(getElement(ID.RACING_WINNERS));
    removeAllChildNodes(getElement(ID.RACING_STATUS));
    changeActivity([ID.CAR_NAMES_INPUT, ID.CAR_NAMES_SUBMIT, ID.RACING_COUNT_INPUT, ID.RACING_COUNT_SUBMIT]);
    this.cars = [];
  }
}

new CarRacing();
