import Random from "../util/random.js";
import { CAR } from "../constant/constant.js";

class Move {
  #carName;
  #moveTrace = [];

  constructor(carName) {
    this.#carName = carName;
  }
  move() {
    if (Random.randomNum() >= CAR.MOVE_THRESHOLD) {
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
