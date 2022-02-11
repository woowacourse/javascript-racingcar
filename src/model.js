import { NUMBER } from "./utils/constants.js"

export default class Model {
  carList = [];

  saveCarList(carList) {
    this.carList = carList;
  }

  startRace(count) {
    this.resetAllCarStep();
    for (let i = 0; i < count; i++) {
      this.carList.forEach((car) => car.randomMove());
    }
  }

  resetAllCarStep() {
    this.carList.forEach((car) => (car.step = NUMBER.INITIAL_STEP));
  }

  resetCarList() {
    this.carList = [];
  }
}
