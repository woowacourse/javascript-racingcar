import View from './view.js';
import Model from './model.js';
import Car from './car.js';
import { validateNameInput, validateCountInput } from './utils/validator.js';

export default class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model();
    this.triggerEvent();
  }

  triggerEvent() {
    this.view.setOnSubmitName(this.onSubmitName.bind(this));
    this.view.setOnSubmitCount(this.onSubmitCount.bind(this));
    this.view.setOnClickReset(this.onClickReset.bind(this));
  }

  onSubmitName(carNames) {
    try {
      const carNamesArray = carNames.split(',');
      validateNameInput(carNamesArray);
      this.view.showCountForm();
      this.model.saveCarList(this.makeCars(carNamesArray));
    } catch (error) {
      alert(error.message);
    }
  }

  makeCars(carNamesArray) {
    const carList = carNamesArray.map((carName) => new Car(carName));
    return carList;
  }

  onSubmitCount(count) {
    try {
      const { carList } = this.model;
      validateCountInput(Number(count));
      this.model.startRace(count);
      this.view.resultUpdate(carList);
      this.view.winnerUpdate(this.makeWinner(carList));
    } catch (error) {
      alert(error.message);
    }
  }

  onClickReset() {
    this.model.resetCarList();
    this.view.hideResult();
  }

  makeWinner(carList) {
    const steps = carList.map((car) => car.step);
    const maxStep = Math.max(...steps);
    const winnerCarList = carList.filter((car) => car.step === maxStep);
    return winnerCarList.map((car) => car.name);
  }
}
