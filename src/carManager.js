import { NUMBER } from './utils/constants.js';

export default class CarManager {
  constructor() {
    this.carList = [];
  }

  saveCarList(carList) {
    this.carList = carList;
  }

  startRace(count) {
    this.#resetAllCarStep();
    this.#repeatEachRace(count);
  }

  #repeatEachRace(count) {
    Array(count)
      .fill()
      .forEach((_) => {
        this.carList.forEach((car) => car.randomMove());
      });
  }

  #resetAllCarStep() {
    this.carList.forEach((car) => car.resetStep());
  }

  resetCarList() {
    this.carList = [];
  }
}
