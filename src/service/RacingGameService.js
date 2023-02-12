const Car = require('../domain/Car');
const common = require('../utils/common');
const { GAME } = require('../constant/constants');

class RacingGameService {
  #cars;
  #carsMoveHistories;

  constructor() {
    this.#cars = [];
    this.#carsMoveHistories = [];
  }

  getCars() {
    return this.#cars;
  }

  makeCars(carNames) {
    carNames.forEach((carName) => {
      this.#cars.push(new Car(carName));
    });
  }

  moveCars() {
    this.#cars.forEach((car) =>
      car.move(
        common.generateRandomNumberInRange(GAME.MOVE_CONDITION.min, GAME.MOVE_CONDITION.max),
      ),
    );
    this.getCarsMoveRecord();
  }

  getCarsMoveRecord() {
    this.#carsMoveHistories.push(
      this.#cars.map((car) => ({
        name: car.getName(),
        distance: car.getDistance(),
      })),
    );
    return this.#carsMoveHistories;
  }
}

module.exports = RacingGameService;
