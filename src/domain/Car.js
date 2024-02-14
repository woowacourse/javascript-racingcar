import { pickRandomNumber } from "../utils/RandomUtil.js";
export default class Car {
  static thresholdForGoing = 4;

  #name;
  #mileage = 0;

  constructor(name) {
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

  #shouldGo() {
    return pickRandomNumber() >= Car.thresholdForGoing;
  }

  #raiseMileage() {
    this.#mileage += 1;
  }
}
