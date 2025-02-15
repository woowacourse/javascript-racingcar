import { ERROR_MESSAGE } from "../constants/message.js";
import { CAR_SETTING } from "../constants/setting.js";
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
    if (
      name.length < CAR_SETTING.minCarName ||
      name.length > CAR_SETTING.maxCarName
    ) {
      throw new Error(ERROR_MESSAGE.carNameLength);
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
