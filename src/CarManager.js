// @ts-check
import Car from './Car.js';
import { CONFIG } from './constants/config.js';

class CarManager {
  constructor() {
    this.cars = [];
  }

  createCars(names) {
    const carNames = this.splitCarName(names);

    this.cars = carNames.map((carName) => new Car(carName));
    return this.cars;
  }

  splitCarName(names) {
    return names.split(`${CONFIG.COMMA} `);
  }
}

export default CarManager;
