import { INIT } from "../constants/constant.js";

class RacingCarModel {
  constructor() {
    this._cars = INIT.CARS;
    this._count = INIT.COUNT;
  }

  get cars() {
    return this._cars;
  }

  set cars(newCars) {
    if (newCars) {
      this._cars = newCars;
    }
  }

  get count() {
    return this._count;
  }

  set count(newCount) {
    this._count = newCount;
  }
}

export default RacingCarModel;
