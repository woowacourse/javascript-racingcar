import CarManager from './carManager.js';
export default class Model {
  constructor() {
    this.carManager = new CarManager();
  }

  getCarList() {
    return this.carManager.carList;
  }

  saveCarList(carList) {
    this.carManager.saveCarList(carList);
  }

  startRace(count) {
    this.carManager.startRace(count);
  }

  resetCarList() {
    this.carManager.resetCarList();
  }
}
