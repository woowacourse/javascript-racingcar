const Car = require('./Car');
const generateRandomNumber = require('../utils/randomNumberGenerator');

class RacingGame {
  static MOVE_CONDITION = 4;
  #cars;
  #round;

  constructor(carNames, round) {
    this.#cars = carNames.map((carName) => new Car(carName));
    this.#round = round;
  }

  race() {
    this.#cars.forEach((car) => {
      const randomNumber = generateRandomNumber();

      if (randomNumber >= RacingGame.MOVE_CONDITION) {
        car.move();
      }
    });

    this.#round -= 1;
  }

  getRoundResult() {
    return this.#cars.map((car) => {
      const name = car.getName();
      const position = car.getPosition();

      return { name, position };
    });
  }

  getWinners(highestScore) {
    return this.#cars
      .filter((car) => car.getPosition() === highestScore)
      .map((car) => car.getName());
  }

  getHighestScore() {
    return Math.max(...this.#cars.map((car) => car.getPosition()));
  }

  isPlaying() {
    return Boolean(this.#round);
  }
}

module.exports = RacingGame;
