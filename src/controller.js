import View from './view.js';
import Model from './model.js';
import Car from './car.js';

export default class Controller {
  constructor() {
    this.view = new View();
    this.model = new Model();
    this.triggerEvent();
  }

  triggerEvent() {
    this.view.setOnSubmitName(this.onSubmitName.bind(this));
    this.view.setOnSubmitCount(this.onSubmitCount.bind(this));
  }

  onSubmitName(carNames) {
    const carNamesArray = carNames.split(',');
    this.model.saveCarList(this.makeCars(carNamesArray));
  }

  makeCars(carNamesArray) {
    const carList = carNamesArray.map((carName) => new Car(carName));
    return carList;
  }

  onSubmitCount(count) {}
}
