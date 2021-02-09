class RacingCarModel {
  constructor() {
    this.cars = [];
    this.count = 0;
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
