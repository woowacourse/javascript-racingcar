const Car = require('./Car');

class CarManager {
  #cars;

  constructor(carNames) {
    this.#cars = [];

    carNames.forEach((singleCarName) => {
      this.#cars.push(new Car(singleCarName));
    });
  }

  progress() {
    this.#cars.forEach((singleCar) => {
      singleCar.tryProgress();
    });
  }

  getCars() {
    return this.#cars;
  }
}

module.exports = CarManager;
