import { generateRandomNumber } from "../utils/utils.js";

export default class Car {
  #name;
  #position;

  static MOVE_CONDITION = 4;

  static START_POSITION = 0;

  static MOVE_COUNT = 1;

  constructor(name) {
    this.#name = name;
    this.#position = Car.START_POSITION;
  }

  move(randomDigit = generateRandomNumber()) {
    const isMoving = randomDigit >= Car.MOVE_CONDITION;
    if (isMoving) {
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
