import { MOVE_CONDITION } from "../constants/setting.js";
import { generateRandomNumber } from "../utils/utils.js";

export default class Car {
  #name;
  #position;

  static START_POSITION = 0;
  static MOVE_COUNT = 1;

  constructor(name) {
    this.#name = name;
    this.#position = Car.START_POSITION;
  }

  move() {
    const isMoving = generateRandomNumber() >= MOVE_CONDITION;
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
