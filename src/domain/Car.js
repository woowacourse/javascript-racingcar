import RandomUtil from "../utils/RandomUtil.js";
import { ERROR_MESSAGE } from "../constants/message.js";
export default class Car {
  static MAX_NAME_LENGTH = 5;
  static THRESHOLD_FOR_GOING = 4;

  static MIN_RANDOM_NUMBER = 0;
  static MAX_RANDOM_NUMBER = 9;

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
    return (
      RandomUtil.pickRandomNumberBetween(Car.MIN_RANDOM_NUMBER, Car.MAX_RANDOM_NUMBER) >=
      Car.THRESHOLD_FOR_GOING
    );
  }

  #increaseOneMileage() {
    this.#mileage += 1;
  }
}
