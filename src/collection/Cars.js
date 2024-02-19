import { Validator, gameUtils } from '../utils';

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

  #actCars(car) {
    const randomNumber = gameUtils.pickRandomNumber();
    return car.actCar(randomNumber);
  }

  roundStart() {
    const roundResult = this.#cars.map((car) => this.#actCars(car));
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
