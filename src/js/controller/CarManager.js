import Car from "../model/Car.js";

export default class CarManager {
  constructor() {
    this.cars = [];
  }

  init() {
    this.cars = [];
  }

  sortCars() {
    return this.cars
      .slice()
      .sort((left, right) => right.location - left.location);
  }

  createCars(carNamesArray) {
    carNamesArray.forEach(carName => {
      this.cars.push(new Car(carName));
    });
  }
}
