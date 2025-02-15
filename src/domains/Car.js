import { generateRandomNumber } from "../utils/utils.js";

export default class Car {
  #name;
  #position;

  static START_POSITION = 0;
  static MOVE_COUNT = 1;
  static MOVE_CONDITION = 4;

  constructor(name) {
    this.#validateCarName(name);
    this.#name = name;
    this.#position = Car.START_POSITION;
  }

  #validateCarName(name) {
    if (name.length < 1 || name.length > 5) {
      throw new Error("Car name length must be between 1 and 5");
    }
  }

  static isCanMove() {
    return generateRandomNumber() >= Car.MOVE_CONDITION;
  }

  move(isCanMove) {
    if (isCanMove) {
      this.#position += Car.MOVE_COUNT;
    }
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}
