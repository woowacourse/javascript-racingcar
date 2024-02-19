import { MOVE_CONDITION } from "../constant/index.js";

class MoveCarInfo {
  #carName;
  #moveTrace = [];

  constructor(carName) {
    this.#carName = carName;
  }

  move(randomNum) {
    if (this.#canMove(randomNum)) {
      return this.#moveTrace.push(true);
    }
    return this.#moveTrace.push(false);
  }

  #canMove(randomNum) {
    console.log(MOVE_CONDITION);
    if (randomNum >= MOVE_CONDITION) {
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
