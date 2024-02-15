class Move {
  #carName;
  #moveTrace = [];

  constructor(carName) {
    this.#carName = carName;
  }
  move() {
    if (this.#randomNum() >= 4) {
      return this.#moveTrace.push(true);
    }
    return this.#moveTrace.push(false);
  }

  #randomNum() {
    return Math.floor(Math.random() * 10);
  }

  getInfo() {
    return {
      carName: this.#carName,
      moveTrace: this.#moveTrace,
    };
  }
}
export default Move;
