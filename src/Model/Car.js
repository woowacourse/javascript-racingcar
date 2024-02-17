import AppError from "../utils/Error";
import { CAR_CONSTANTS } from "../Constants/Constants";

const { NAME_LENGTH_RANGE, MIN_MOVE_THRESHOLD, MOVE_DISTANCE } = CAR_CONSTANTS;

export default class Car {
  #name;
  #distance = 0;

  constructor(name) {
    this.#checkName(name);
    this.#name = name;
  }

  #checkName(name) {
    if (
      NAME_LENGTH_RANGE.max < name.length ||
      name.length < NAME_LENGTH_RANGE.min
    ) {
      throw new AppError();
    }
  }

  move(randomNum) {
    if (randomNum >= MIN_MOVE_THRESHOLD) {
      this.#distance += MOVE_DISTANCE;
    }
  }

  getDistance() {
    return this.#distance;
  }

  getName() {
    return this.#name;
  }
}
