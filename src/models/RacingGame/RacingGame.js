import Car from '../Car/Car.js';

class RacingGame {
  #tryCount;

  #cars;

  constructor({ racingCarNames, tryCount }) {
    this.#tryCount = tryCount;
    this.#cars = racingCarNames.map((carName) => new Car(carName));
  }

  startRace(randomMoveCounts) {
    const racingResult = Array.from({ length: this.#tryCount }, (_, rowIndex) =>
      this.#updateRacingResult(rowIndex, randomMoveCounts),
    );

    return racingResult;
  }

  #updateRacingResult(rowIndex, randomMoveCounts) {
    return this.#cars.map((car, columnIndex) => car.move(randomMoveCounts[rowIndex][columnIndex]));
  }
}

export default RacingGame;
