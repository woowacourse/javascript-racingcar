class RacingCar {
  #carName;

  #moveCount;

  constructor(carName) {
    this.#carName = carName;
    this.#moveCount = 1;
  }

  move() {
    this.#moveCount += 1;
  }

  get carName() {
    return this.#carName;
  }

  get moveCount() {
    return this.#moveCount;
  }
}

module.exports = RacingCar;
