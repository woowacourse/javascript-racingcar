const Car = require('./Car');
const generateRandomNumber = require('../utils/randomNumberGenerator');

class RacingGame {
  static MOVE_CONDITION = 4;
  #cars;
  #totalRound;
  #currentRound = 1;

  constructor(carNames, round) {
    this.#cars = carNames.map((carName) => new Car(carName));
    this.#totalRound = round;
  }

  race() {
    this.#cars.forEach((car) => {
      const randomNumber = generateRandomNumber();

      if (randomNumber >= RacingGame.MOVE_CONDITION) {
        car.move();
      }

      car.accumlateRoundPosition();
    });

    this.#currentRound += 1;
  }

  getFinalResult() {
    const finalResult = [];
    let roundCounter = 1;

    while (roundCounter <= this.#totalRound) {
      const roundResult = this.#getRoundResult(roundCounter);
      finalResult.push(roundResult);

      roundCounter += 1;
    }

    return finalResult;
  }

  #getRoundResult(round) {
    return this.#cars.map((car) => {
      const name = car.getName();
      const position = car.getRoundPosition(round - 1);

      return { name, position };
    });
  }

  getWinners(highestScore) {
    return this.#cars
      .filter((car) => car.getRoundPosition(this.#totalRound - 1) === highestScore)
      .map((car) => car.getName());
  }

  getHighestScore() {
    return Math.max(...this.#cars.map((car) => car.getRoundPosition(this.#totalRound - 1)));
  }

  isPlaying() {
    return this.#currentRound <= this.#totalRound;
  }
}

module.exports = RacingGame;
