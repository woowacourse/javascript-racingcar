class RacingCar {
  #name;

  #moveCount;

  #isWin;

  constructor(carName) {
    this.#name = carName;
    this.#moveCount = 1;
    this.#isWin = false;
  }

  move() {
    this.#moveCount += 1;
  }

  getMoveCount() {
    return this.#moveCount;
  }
}

module.exports = RacingCar;
