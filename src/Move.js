import { randomNum } from "./util/random.js";
class Move {
  #carName;
  #moveTrace = [];

  constructor(carName) {
    this.#carName = carName;
  }

  move() {
    if (this.moveCondition()) {
      return this.#moveTrace.push(true);
    }
    return this.#moveTrace.push(false);
  }

  moveCondition() {
    if (randomNum() >= 4) {
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
