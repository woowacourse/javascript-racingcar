import Validator from '../utils/Validator';

class Cars {
  #cars;

  #previousRoundResult;

  constructor(cars) {
    this.#previousRoundResult = [];
    this.#validate(cars);
    this.#cars = cars;
  }

  #validate(cars) {
    Validator.validCarNameDuplicate(cars);
  }

  roundStart() {
    const roundResult = this.#cars.map((car) => car.actCar());
    if (this.#isFirstRound()) {
      this.#previousRoundResult = roundResult;
      return roundResult;
    }
    const accumulatedResult = this.#accmulateScore(roundResult);
    this.#previousRoundResult = accumulatedResult;
    return accumulatedResult;
  }

  #isFirstRound() {
    return this.#previousRoundResult.length === 0;
  }

  #accmulateScore(roundResult) {
    return roundResult.map(({ name, score }, index) => {
      return { name, score: this.#previousRoundResult[index].score + score };
    });
  }
}

export default Cars;
