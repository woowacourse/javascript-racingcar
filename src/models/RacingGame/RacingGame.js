import Car from '../Car/Car.js';

class RacingGame {
  #tryCount;

  #cars;

  constructor({ racingCarNames, tryCount }) {
    this.#tryCount = tryCount;
    this.#cars = racingCarNames.map((carName) => new Car(carName));
  }

  startRace(randomMoveCounts) {
    const racingResult = Array.from({ length: this.#tryCount }, (_, racingTurn) =>
      this.#updateRacingResult(racingTurn, randomMoveCounts),
    );

    return racingResult;
  }

  #updateRacingResult(racingTurn, randomMoveCounts) {
    const partialRacingResult = this.#cars.map((car, carIndex) => {
      const randomMoveCount = randomMoveCounts[racingTurn][carIndex];

      const updatedCarDetail = car.move(randomMoveCount);

      return updatedCarDetail;
    });

    return partialRacingResult;
  }
}

export default RacingGame;
