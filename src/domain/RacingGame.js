const Car = require('./Car');
const { Settings } = require('../Config');
const Random = require('../util/Random');

class RacingGame {
  #carList = [];

  #attempts = 0;

  constructor(carNames, attempts) {
    this.#carList = carNames.map((carName) => new Car(carName));
    this.#attempts = attempts;
  }

  canMove() {
    return this.#attempts > 0;
  }

  moveAllCars() {
    if (this.#attempts === 0) return;
    this.#attempts -= 1;
    this.#carList.forEach((car) => {
      const power = Random.generateRandomInteger(
        Settings.MIN_RANDOM_VALUE,
        Settings.MAX_RANDOM_VALUE,
      );
      car.move(power);
    });
  }

  findCarsAtPosition(position) {
    return this.#carList
      .filter((car) => car.getPosition() === position)
      .map((car) => car.getName());
  }

  getGameStatus() {
    return this.#carList.reduce(
      (status, car) => {
        status[car.getName()] = car.getPosition();
        return status;
      },
      {},
    );
  }

  findMaxPosition() {
    return this.#carList.reduce((prev, car) => Math.max(prev, car.getPosition()), 0);
  }
}

module.exports = RacingGame;
