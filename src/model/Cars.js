import Car from './Car.js';

class Cars {
  #cars;

  makeCars(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }
}

export default Cars;
