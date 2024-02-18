import { Validator } from '../utils';

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
      return this.#saveRoundResultAndReturn(roundResult);
    }
    const accumulatedResult = this.#accmulateScore(roundResult);
    return this.#saveRoundResultAndReturn(accumulatedResult);
  }

  #isFirstRound() {
    return this.#previousRoundResult.length === 0;
  }

  #saveRoundResultAndReturn(roundResult) {
    this.#previousRoundResult = roundResult;
    return roundResult;
  }

  #accmulateScore(roundResult) {
    return roundResult.map(({ name, score }, index) => {
      return { name, score: this.#previousRoundResult[index].score + score };
    });
  }
}

export default Cars;
