import CarValidator from './CarValidator';
import Condition from '../constant/Condition';

const { CAR_ADVANCE } = Condition;

class Car {
  #name;
  #advance;

  constructor(name) {
    this.#name = this.#validateName(name);
    this.#advance = 0;
  }

  #validateName(name) {
    CarValidator.isValidNameRange(name);
    return name;
  }

  getName() {
    return this.#name;
  }

  getAdvance() {
    return this.#advance;
  }

  updateAdvance(number) {
    if (number >= CAR_ADVANCE.CONDITION) this.#advance += CAR_ADVANCE.STEP;
  }
}

export default Car;
