const { MAGIC_NUMBER } = require('../constant');
const { Random } = require('../utils');

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
    new Array(this.#trial).fill(0).forEach(() => {
      this.#cars.forEach((car) => {
        const randomNumber = Random.pickNumberInRange(
          MAGIC_NUMBER.RANGE_START,
          MAGIC_NUMBER.RANGE_END
        );
        car.move(randomNumber);
      });
    });
  }

  getWinners() {
    const winnerPosition = this.#getWinnerPosition();

    const winners = this.#cars
      .filter((carInstance) => winnerPosition === carInstance.getPosition())
      .map((carInstance) => carInstance.getName());

    return winners;
  }

  #getWinnerPosition() {
    const [winner] = this.#cars.sort(
      (xCar, yCar) => yCar.getPosition() - xCar.getPosition()
    );

    return winner.getPosition();
  }
}

module.exports = Race;
