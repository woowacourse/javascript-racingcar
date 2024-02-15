import RandomUtil from "../utils/RandomUtil.js";
import { ERROR_MESSAGE } from "../constants/message.js";
export default class Car {
  static THRESHOLD_FOR_GOING = 4;
  static MAX_NAME_LENGTH = 5;

  #name;
  #mileage = 0;

  constructor(name) {
    this.#validate(name);

    this.#name = name;
  }

  go() {
    if (this.#shouldGo()) {
      this.#increaseOneMileage();
    }
  }

  getMileage() {
    return this.#mileage;
  }

  getName() {
    return this.#name;
  }

  #validate(name) {
    if (name.length > Car.MAX_NAME_LENGTH) {
      throw new Error(ERROR_MESSAGE.invalidCarNameLength);
    }
  }

  #shouldGo() {
    return RandomUtil.pickRandomNumber() >= Car.THRESHOLD_FOR_GOING;
  }

  #increaseOneMileage() {
    this.#mileage += 1;
  }
}
