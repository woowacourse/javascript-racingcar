export default class CarRacingModel {
  constructor() {
    this.init();
  }

  init() {
    this.cars = [];
    this.racingCount = 0;
  }

  getWinners() {
    let maxDistance = -1;

    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].distance > maxDistance) {
        maxDistance = this.cars[i].distance;
      }
    }

    return this.cars.filter((car) => car.distance === maxDistance);
  }

  addCar(name) {
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
