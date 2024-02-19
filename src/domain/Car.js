import { validateCarName } from "../validate.js";
import { STANDARD_VALUE } from "../constants/standardValue.js";
import { isHigherThanThreshold } from "../raceRule.js";

export default class Car {
  static MAX_NAME_LENGTH = STANDARD_VALUE.maxCarNameLength;

  #name;
  #mileage = STANDARD_VALUE.initMileage;
  #shouldGo;

  constructor(name, shouldGo = isHigherThanThreshold) {
    this.#validate(name);

    this.#name = name;
    this.#shouldGo = shouldGo;
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
    validateCarName(name, { max: Car.MAX_NAME_LENGTH });
  }

  #increaseOneMileage() {
    this.#mileage += 1;
  }
}
