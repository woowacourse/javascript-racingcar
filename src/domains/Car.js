import CarNameValidator from "./CarNameValidator.js";
import { generateRandomNumber } from "../utils/utils.js";

export default class Car {
  #name;
  #position;

  static START_POSITION = 0;
  static MOVE_COUNT = 1;
  static MOVE_CONDITION = 4;

  constructor(name) {
    CarNameValidator.validateCarName(name);
    this.#name = name;
    this.#position = Car.START_POSITION;
  }

  static isCanMove() {
    return generateRandomNumber() >= Car.MOVE_CONDITION;
  }

  move(isCanMove) {
    if (isCanMove) {
      this.#position += Car.MOVE_COUNT;
    }
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}
