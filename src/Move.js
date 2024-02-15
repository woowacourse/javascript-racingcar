import Random from "./util/random.js";
class Move {
  #carName;
  #moveTrace = [];

  constructor(carName) {
    this.#carName = carName;
  }
  move() {
    if (Random.randomNum() >= 4) {
      return this.#moveTrace.push(true);
    }
    return this.#moveTrace.push(false);
  }

  getInfo() {
    return {
      carName: this.#carName,
      moveTrace: this.#moveTrace,
    };
  }
}
export default Move;
