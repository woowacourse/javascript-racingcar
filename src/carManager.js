import Car from './car.js';

export default class CarManager {
  constructor() {
    this.carList = [];
  }

  createAndSaveCarList(carNamesArray) {
    const carList = this.#createCarInstanceList(carNamesArray);
    this.#saveCarList(carList);
  }

  #createCarInstanceList(carNamesArray) {
    return carNamesArray.map((carName) => new Car(carName));
  }

  #saveCarList(carList) {
    this.carList = carList;
  }

  startRace(count) {
    this.#resetAllCarStep();
    this.#repeatEachRace(count);
  }

  #resetAllCarStep() {
    this.carList.forEach((car) => car.resetStep());
  }

  #repeatEachRace(count) {
    Array(count)
      .fill()
      .forEach((_) => {
        this.carList.forEach((car) => car.randomMove());
      });
  }

  resetCarList() {
    this.carList = [];
  }
}
