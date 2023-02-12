const { MAGIC_NUMBER } = require('../constant/magicNumber');
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
        const randomNumber = Random.pickNumberInRange(MAGIC_NUMBER.RANGE_START, MAGIC_NUMBER.RANGE_END);
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

    return result[MAGIC_NUMBER.FIRST_INDEX].getPosition();
  }
}

module.exports = Race;
