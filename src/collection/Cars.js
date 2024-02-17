class Cars {
  #cars;

  #previousRoundResult;

  constructor(cars) {
    this.#previousRoundResult = [];
    this.#validate(cars);
    this.#cars = cars;
  }

  #validate(cars) {
    const uniqueCarNames = new Set();
    cars.forEach((car) => {
      uniqueCarNames.add(car.getName());
    });

    if (uniqueCarNames.size !== cars.length) {
      throw new Error('차 이름은 중복되지 않아야 합니다.');
    }
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
