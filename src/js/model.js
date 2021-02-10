import { INIT } from "./constants/constant.js";

class RacingCarModel {
  constructor() {
    this.cars = INIT.CARS;
    this.count = INIT.COUNT;
  }

  getCars() {
    return this.cars;
  }

  setCars(cars) {
    this.cars = cars;
  }

  getCount() {
    return this.count;
  }

  setCount(count) {
    this.count = count;
  }
}

export default RacingCarModel;
