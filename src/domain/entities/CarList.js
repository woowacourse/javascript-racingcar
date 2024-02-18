import CONDITIONS from '../domain/constants/Conditions.js';
import Car from './Car.js';

class CarList {
  #carList;

  constructor(carStr) {
    const carStrs = carStr.split(',').map(car => car.trim());
    this.#carList = carStrs.map(name => new Car(name));
  }

  progress(randoms) {
    randoms.forEach((random, index) => {
      if (random >= CONDITIONS.progressRandomThreshold) {
        this.#carList[index].moveForward();
      }
    });
  }

  getCarList() {
    return this.#carList;
  }
}

export default CarList;
