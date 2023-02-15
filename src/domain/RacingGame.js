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

  static findCarsAtPosition(gameStatus, position) {
    return Object.keys(gameStatus)
      .filter((carName) => gameStatus[carName] === position);
  }

  getGameStatus() {
    return Object.fromEntries(this.#carList.map((car) => [car.getName(), car.getPosition()]));
  }

  static findMaxPosition(gameStatus) {
    return Math.max(...Object.values(gameStatus));
  }
}

module.exports = RacingGame;
