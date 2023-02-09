const Random = require('../utils/Random');

class Race {
  #cars;

  #trial;

  constructor() {
    this.#cars = [];
    this.#trial = 0;
  }

  getCars() {
    return this.#cars;
  }

  getTrial() {
    return this.#trial;
  }

  setTrial(newTrial) {
    this.#trial = newTrial;
  }

  addCar(newCar) {
    this.#cars.push(newCar);
  }

  start() {
    Array.from({ length: this.#trial }, () => 0).forEach(() => {
      this.#cars.forEach((car) => {
        const randomNumber = Random.pickNumberInRange(0, 9);
        car.move(randomNumber);
      });
    });
  }
}

module.exports = Race;
