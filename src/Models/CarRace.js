const RandomNumGenerator = require('../Utils/RandomNumGenerator');

class CarRace {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  runOnce() {
    this.#cars.forEach(car => {
      car.move(RandomNumGenerator.generateNumber());
    });
  }

  getResult() {
    const result = new Map();
    this.#cars.forEach(car => {
      result.set(car.name, car.position);
    });

    return result;
  }
}

module.exports = CarRace;
