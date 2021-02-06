export default class CarRacingModel {
  constructor() {
    this.cars = [];
  }

  addCars(name) {
    this.cars.push({
      name,
      distance: 0,
    });
  }
}
