const RandomNumGenerator = require('../Utils/RandomNumGenerator');

class Cars {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  race() {
    this.#cars.forEach(car => {
      car.move(RandomNumGenerator.generateNumber());
    });
  }

  getRaceResult() {
    const result = new Map();
    this.#cars.forEach(car => {
      result.set(car.getName(), car.getPosition());
    });

    return result;
  }
}

module.exports = Cars;
