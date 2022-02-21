import CarManager from './carManager.js';
export default class Model {
  constructor() {
    this.carManager = new CarManager();
  }

  getCarList() {
    return this.carManager.carList;
  }

  createAndSaveCarList(carNamesArray) {
    this.carManager.createAndSaveCarList(carNamesArray);
  }

  startRace(count) {
    this.carManager.startRace(count);
  }

  resetCarList() {
    this.carManager.resetCarList();
  }
}
