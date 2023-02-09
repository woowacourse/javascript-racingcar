class CarRace {
  #carNames;

  #carDistances;

  #repeatNumber;

  setCarNames(cars) {
    this.#carNames = cars;
    this.#carDistances = Array(this.#carNames.length).fill(0);
  }

  setRepeatNumber(repeatNumber) {
    this.#repeatNumber = repeatNumber;
  }

  setCarDistances(carDistances) {
    this.#carDistances = carDistances;
  }

  getCarNames() {
    return this.#carNames;
  }

  getCarDistances() {
    return this.#carDistances;
  }

  getRepeatNumber() {
    return this.#repeatNumber;
  }
}

module.exports = CarRace;
