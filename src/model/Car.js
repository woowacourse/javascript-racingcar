import CarNamesValidator from '../utils/CarNamesValidator';
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
    CarNamesValidator.isValidRange(name);
    return name;
  }

  getName() {
    return this.#name;
  }

  getAdvance() {
    return this.#advance;
  }

  updateAdvance(number) {
    if (number >= CAR_ADVANCE.condition) this.#advance += CAR_ADVANCE.step;
  }
}

export default Car;
