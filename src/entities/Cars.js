import CONDITIONS from '../constants/Conditions.js';
import Car from './Car.js';

class Cars {
  #cars;

  constructor(carStr) {
    this.#cars = carStr.split(',').map(carName => new Car(carName));
  }

  progress(randoms) {
    this.#cars.forEach((car, i) => {
      if (randoms[i] >= CONDITIONS.progressRandomThreshold) {
        car.moveForward();
      }
    });
  }

  getNames() {
    return this.#cars.map(car => car.getName());
  }
  getPositions() {
    return this.#cars.map(car => car.getPosition());
  }

  getCarsCount() {
    return this.#cars.length;
  }
}

export default Cars;
