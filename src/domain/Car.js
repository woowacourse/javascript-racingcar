import { CAR } from "../constants/domain.js";
import { getRandomNumber } from "../utils/getRandomNumber.js";
import { validateCarNames } from "../utils/validation.js";

export default class Car {
  #name;
  #position = 0;

  constructor(name) {
    this.validate(name);
    this.#name = name;
  }

  validate(name) {
    validateCarNames(name);
  }

  move() {
    if (this.isMove(getRandomNumber(10))) {
      this.#position += 1;
    }
  }

  isMove(number) {
    return number >= CAR.PROGRESS_CRITERIA;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }
}
