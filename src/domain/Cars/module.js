import CarEngine from '../CarEngine/module.js';

class Cars {
  #racingCarDetails;

  constructor(racingCarNames) {
    this.#createInitRacingCarDetails(racingCarNames);
  }

  #createInitRacingCarDetails(racingCarNames) {
    this.#racingCarDetails = racingCarNames.map((carName) => ({ carName, moveCount: 0 }));
  }

  #updateMoveCounts(randomMoveCounts) {
    const racingCarDetailsCopy = this.#racingCarDetails.map((detail) => ({ ...detail }));

    randomMoveCounts.forEach((randomMoveCount, index) => {
      racingCarDetailsCopy[index] = CarEngine.triggerMove(racingCarDetailsCopy[index], randomMoveCount);
    });

    return racingCarDetailsCopy;
  }

  moveCars(randomMoveCounts) {
    this.#racingCarDetails = this.#updateMoveCounts(randomMoveCounts);

    return this.#racingCarDetails;
  }
}

export default Cars;
