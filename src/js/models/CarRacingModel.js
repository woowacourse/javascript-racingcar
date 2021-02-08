export default class CarRacingModel {
  constructor() {
    this.cars = [];
    this.racingCount = 0;
  }

  initCarsDistance() {
    for (let i = 0; i < this.cars.length; i++) {
      this.cars[i].distance = 0;
    }
  }

  addCars(name) {
    this.cars.push({
      name,
      distance: 0,
    });
  }

  moveCar(name) {
    const carIndex = this.cars.findIndex((car) => car.name === name);
    this.cars[carIndex].distance += 1;
  }
}
