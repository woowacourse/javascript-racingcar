class RacingCar {
  #name;

  #moveCount;

  #isWin;

  constructor(carName) {
    this.#name = carName;
    this.#moveCount = 0;
    this.#isWin = false;
  }
}

module.exports = RacingCar;
