import { INIT } from "../constants/constant.js";

class RacingCarModel {
  constructor() {
    this._cars = INIT.CARS;
    this._count = INIT.COUNT;
  }

  get cars() {
    return this._cars;
  }

  get count() {
    return this._count;
  }

  set count(newCount) {
    this._count = newCount;
  }

  moveCar(moves) {
    this._cars = this._cars.map((car, index) => {
      return { ...car, forward: car.forward + moves[index] };
    });
  }

  initCar(carNames) {
    this._cars = carNames.map(carName => {
      return { name: carName, forward: INIT.FORWARD };
    });
  }

  reset() {
    this._cars = INIT.CARS;
    this._count = INIT.COUNT;
  }
}

export default RacingCarModel;
