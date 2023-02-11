const RandomNumGenerator = require('../Utils/RandomNumGenerator');

class Race {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  go() {
    this.#cars.forEach(car => {
      car.move(RandomNumGenerator.generateNumber());
    });
  }

  getResult() {
    const result = new Map();
    this.#cars.forEach(car => {
      result.set(car.getName(), car.getPosition());
    });

    return result;
  }
}

module.exports = Race;
