const Car = require('./Car');

const RandomNumberGenerator = require('../src/utils/RandomNumberGenerator');

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
      singleCar.tryProgress(RandomNumberGenerator.generate());
    });
  }

  getCars() {
    return this.#cars;
  }
}

module.exports = CarManager;
