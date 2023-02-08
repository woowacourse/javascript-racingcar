const RandomNumGenerator = require('../Utils/RandomNumGenerator');

class Race {
  #cars;
  #tryCount;

  constructor(cars, tryCount) {
    this.#cars = cars;
    this.#tryCount = tryCount;
  }

  start() {
    for (let i = 0; i < this.#tryCount; i += 1) {
      this.#cars.forEach(car => {
        car.move(RandomNumGenerator.generateNumber());
      });
    }
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
