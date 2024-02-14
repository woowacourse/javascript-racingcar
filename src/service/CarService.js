import Car from '../domain/Car.js';

class CarService {
  #cars;

  constructor(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }
}

export default CarService;
