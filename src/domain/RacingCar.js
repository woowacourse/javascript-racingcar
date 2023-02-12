class RacingCar {
  #carName;

  #movePosition;

  constructor(carName) {
    this.#carName = carName;
    this.#movePosition = 1;
  }

  moveForward() {
    this.#movePosition += 1;
  }

  get carName() {
    return this.#carName;
  }

  get moveCount() {
    return this.#movePosition;
  }
}

module.exports = RacingCar;
