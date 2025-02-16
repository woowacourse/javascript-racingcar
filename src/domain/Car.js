import { createError } from "../utils/createError.js";
import { ERROR_MESSAGE } from "../constants/message.js";
import { CAR } from "../constants/constants.js";

export default class Car {
  #name;
  #position;

  constructor(name, position = 0) {
    this.#name = name;
    this.#position = position;

    this.validateName();
  }

  validateName() {
    if (
      this.#name.length < CAR.NAME_LENGTH_MIN ||
      this.#name.length > CAR.NAME_LENGTH_MAX
    ) {
      createError(ERROR_MESSAGE.INVALID_NAME_LENGTH);
    }
  }

  move() {
    this.#position += 1;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}
