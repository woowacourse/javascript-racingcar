import Car from '../Car/Car.js';

class RacingGame {
  #tryCount;
  #cars;

  constructor({ racingCarNames, tryCount }) {
    this.#tryCount = tryCount;
    this.#cars = racingCarNames.map((carName) => new Car(carName));
  }

  #updateRacingResult(row, randomMoveCounts) {
    return this.#cars.map((car, column) => car.move(randomMoveCounts[row][column]));
  }

  startRace(randomMoveCounts) {
    const racingResult = Array.from({ length: this.#tryCount }, (_, row) =>
      this.#updateRacingResult(row, randomMoveCounts),
    );

    return racingResult;
  }
}

export default RacingGame;
