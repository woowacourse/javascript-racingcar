import CarValidator from "./validator/CarValidator";
import Condition from "../constant/Condition";

const { CAR_ADVANCE } = Condition;

class Car {
  #name;
  #advance;

  constructor(name) {
    this.#validateName(name);
    this.#name = name;
    this.#advance = 0;
  }

  #validateName(name) {
    CarValidator.validNameRange(name);
  }

  updateAdvance(number) {
    if (number >= CAR_ADVANCE.CONDITION) this.#advance += CAR_ADVANCE.STEP;
  }

  getName() {
    return this.#name;
  }

  getAdvance() {
    return this.#advance;
  }
}

export default Car;
