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
    this.#trial = Number(newTrial);
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

  getWinners() {
    const longestPosition = this.#getLongestPosition();

    return this.#cars
      .filter((carInstance) => longestPosition === carInstance.getPosition())
      .map((carInstance) => carInstance.getName());
  }

  #getLongestPosition() {
    const result = this.#cars.sort(
      (xCar, yCar) => yCar.getPosition() - xCar.getPosition()
    );

    return result[0].getPosition();
  }
}

module.exports = Race;
