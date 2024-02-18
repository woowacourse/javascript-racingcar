import { ERROR_MESSAGE } from "../constants/message.js";
export default class Car {
  static MAX_NAME_LENGTH = 5;
  static THRESHOLD_FOR_GOING = 4;

  #name;
  #mileage = 0;

  constructor(name) {
    this.#validate(name);

    this.#name = name;
  }

  go(number) {
    if (this.#shouldGo(number)) {
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

  #shouldGo(number) {
    return number >= Car.THRESHOLD_FOR_GOING;
  }

  #increaseOneMileage() {
    this.#mileage += 1;
  }
}
