import View from './view.js';
import Model from './model.js';
import Car from './car.js';
import { validateNameInput, validateCountInput } from './utils/validator.js';
import { trimInArray } from './utils/common.js';
import { CAR_NAME_SEPARATOR } from './utils/constants.js';

export default class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model();
    this.initEventHandlers();
  }

  initEventHandlers() {
    this.view.setOnSubmitName(this.onSubmitName.bind(this));
    this.view.setOnSubmitCount(this.onSubmitCount.bind(this));
    this.view.setOnClickReset(this.onClickReset.bind(this));
  }

  onSubmitName(carNames) {
    try {
      const carNamesArray = trimInArray(carNames.split(CAR_NAME_SEPARATOR));
      validateNameInput(carNamesArray);
      this.view.makeCountFormDisplayNotNone();
      this.model.saveCarList(this.makeCars(carNamesArray));
    } catch (error) {
      alert(error.message);
    }
  }

  makeCars(carNamesArray) {
    return carNamesArray.map((carName) => new Car(carName));
  }

  onSubmitCount(count) {
    try {
      const { carList } = this.model;
      validateCountInput(count);
      this.model.startRace(count);
      this.view.showResult(carList, this.makeWinner(carList));
    } catch (error) {
      alert(error.message);
    }
  }

  onClickReset() {
    this.model.resetCarList();
  }

  makeWinner(carList) {
    const steps = carList.map((car) => car.step);
    const maxStep = Math.max(...steps);
    const winnerCarList = carList.filter((car) => car.step === maxStep);
    return winnerCarList.map((car) => car.name);
  }
}
