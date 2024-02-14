import { pickRandomNumber } from "../utils/RandomUtil.js";
export default class Car {
  static thresholdForGoing = 4;
  static MAX_NAME_LENGTH = 5;

  #name;
  #mileage = 0;

  constructor(name) {
    this.#validate(name);

    this.#name = name;
  }

  go() {
    if (this.#shouldGo()) {
      this.#raiseMileage();
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
      throw new Error("[ERROR] 이름은 5자 이하여야 합니다.");
    }
  }

  #shouldGo() {
    return pickRandomNumber() >= Car.thresholdForGoing;
  }

  #raiseMileage() {
    this.#mileage += 1;
  }
}
