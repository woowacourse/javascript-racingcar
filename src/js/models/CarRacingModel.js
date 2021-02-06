export default class CarRacingModel {
  constructor() {
    this.cars = [];
    this.racingCount = 0;
  }

  addCars(name) {
    this.cars.push({
      name,
      distance: 0,
    });
  }
}
