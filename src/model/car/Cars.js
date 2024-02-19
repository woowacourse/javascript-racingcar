import Car from './Car.js';

class Cars {
  #cars;

  makeCars(carNames) {
    this.#cars = carNames.map((carName) => new Car(carName));
  }

  moveCars(canMoveCars) {
    this.#cars.forEach((car, index) => {
      car.move(canMoveCars[index]);
    });
  }

  getLocations() {
    return this.#cars.map((car) => ({
      name: car.getName(),
      location: car.getLocation()
    }));
  }

  getCars() {
    return this.#cars;
  }
}

export default Cars;
