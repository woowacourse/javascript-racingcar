class Move {
  #carName;
  #moveTrace = [];

  constructor(carName) {
    this.#carName = carName;
  }

  move(randomNum) {
    if (this.moveCondition(randomNum)) {
      return this.#moveTrace.push(true);
    }
    return this.#moveTrace.push(false);
  }

  moveCondition(randomNum) {
    if (randomNum >= 4) {
      return true;
    }
    return false;
  }

  getInfo() {
    return {
      carName: this.#carName,
      moveTrace: this.#moveTrace,
    };
  }
}
export default Move;
