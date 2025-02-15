import {
  MOVE_CONDITION,
  MOVE_COUNT,
  START_POSITION,
} from "./constants/setting.js";
import { generateRandomDigit } from "./utils.js";

export default class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = START_POSITION;
  }

  move(randomDigit = generateRandomDigit()) {
    const isMoving = randomDigit >= MOVE_CONDITION;
    if (isMoving) {
      this.#position += MOVE_COUNT;
    }
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}
