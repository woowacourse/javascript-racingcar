class Cars {
  #cars;

  #previousRoundResult;

  constructor(cars) {
    this.#cars = [];
    this.#previousRoundResult = [];
    this.#validate(cars);
    this.#cars = cars;
  }

  #validate(cars) {
    const uniqueCarNames = new Set();
    cars.forEach((car) => {
      car.addNameForDuplicatedCheck(uniqueCarNames);
    });

    if (uniqueCarNames.size !== cars.length) {
      throw new Error('차 이름은 중복되지 않아야 합니다.');
    }
  }

  roundStart() {
    const accumulatedRoundResult = this.#cars.map(car => {
      const roundResult = car.actCar();
      if (this.#isFirstRound(roundResult)) return roundResult;
    
      const accumulatedResult = this.#accmulateScore(roundResult);
      this.#previousRoundResult[0] = accumulatedResult;
      return accumulatedResult;
    });
    return accumulatedRoundResult;
  }

  #isFirstRound(roundResult) {
    if (this.#previousRoundResult.length !== 0) {
      return false;
    }

    this.#previousRoundResult.push(roundResult);
    return true;
  }

  #accmulateScore(roundResult) {
    roundResult.map(({name, isForward}, index) => {
      return {name, isForward: this.#previousRoundResult[index] + isForward}
    });
  }
}

export default Cars;
