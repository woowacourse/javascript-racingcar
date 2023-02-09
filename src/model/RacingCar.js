class RacingCar {
  #name;

  #moveCount;

  constructor(carName) {
    this.#name = carName;
    this.#moveCount = 1;
  }

  move() {
    this.#moveCount += 1;
  }

  getCarName() {
    return this.#name;
  }

  getMoveCount() {
    return this.#moveCount;
  }
}

module.exports = RacingCar;
