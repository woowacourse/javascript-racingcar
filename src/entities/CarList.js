import CONDITIONS from '../constants/Conditions.js';
import Car from './Car.js';

class CarList {
  #cars;

  constructor(carStr) {
    const carStrs = carStr.split(',').map(car => car.trim());
    this.#cars = carStrs.map(name => new Car(name));
  }

  progress(randoms) {
    randoms.forEach((random, index) => {
      if (random >= CONDITIONS.progressRandomThreshold) {
        this.#cars[index].moveForward();
      }
    });
  }

  getCarList() {
    return this.#cars;
  }

  getCarsCount() {
    return this.#cars.length;
  }
}

export default CarList;
