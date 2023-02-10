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

  getCarName() {
    return this.#carName;
  }

  getMoveCount() {
    return this.#movePosition;
  }
}

module.exports = RacingCar;
