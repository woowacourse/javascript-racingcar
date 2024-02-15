import AppError from "../utils/Error";

export default class Car {
  #name;
  #distance = 0;

  constructor(name) {
    this.#checkName(name);
    this.#name = name;
  }

  #checkName(name) {
    if (5 < name.length || name.length < 1) {
      throw new AppError("[ERROR]");
    }
  }

  move(randomNum) {
    if (randomNum >= 4) {
      this.#distance += 1;
    }
  }

  getDistance() {
    return this.#distance;
  }

  getName() {
    return this.#name;
  }
}
