import { REQUIREMENT } from "../constant/index.js";
const { MOVE_SUCCESS } = REQUIREMENT;

class MoveCarInfo {
  #carName;
  #moveTrace = [];

  constructor(carName) {
    this.#carName = carName;
  }

  move(randomNum) {
    if (this.#moveRequire(randomNum)) {
      return this.#moveTrace.push(true);
    }
    return this.#moveTrace.push(false);
  }

  #moveRequire(randomNum) {
    if (randomNum >= MOVE_SUCCESS) {
      return true;
    }
    return false;
  }

  getCarMoveInfo() {
    return {
      carName: this.#carName,
      moveTrace: this.#moveTrace,
    };
  }
}
export default MoveCarInfo;
