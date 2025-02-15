import {
  MOVE_THRESHOLD,
  ERROR_MESSAGE,
  CAR_NAME_MAX_LENGTH,
  CAR_NAME_MIN_LENGTH,
} from "../config/constants.js";

class Car {
  #name = "";
  #position = 0;

  constructor(name) {
    this.#validate(name);
    this.#name = name;
  }

  #validate(name) {
    if (name.length > CAR_NAME_MAX_LENGTH)
      throw Error(ERROR_MESSAGE.CAR_NAME_MAX_LENGTH);
    if (name.length < CAR_NAME_MIN_LENGTH)
      throw Error(ERROR_MESSAGE.CAR_NAME_MIN_LENGTH);
    if (!Number.isNaN(Number(name)))
      throw Error(ERROR_MESSAGE.CAR_NAME_INVALID_NUMBER);
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  move(number) {
    if (number >= MOVE_THRESHOLD) {
      ++this.#position;
    }
  }
}

export default Car;
