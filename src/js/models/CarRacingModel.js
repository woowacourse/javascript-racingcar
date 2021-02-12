export default class CarRacingModel {
  constructor() {
    this.init();
  }

  init() {
    this.cars = [];
    this.racingCount = 0;
  }

  getWinners() {
    const maxDistance = Math.max(...this.cars.map((car) => car.distance));

    return this.cars.filter((car) => car.distance === maxDistance);
  }

  addCars(name) {
    this.cars.push({
      name,
      distance: 0,
    });
  }

  moveCar(name) {
    const car = this.cars.find((car) => car.name === name);
    car.distance += 1;
  }
}
