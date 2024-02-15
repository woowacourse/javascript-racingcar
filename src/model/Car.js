import CarNamesValidator from '../utils/CarNamesValidator';

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
    if (number >= 4) this.#advance += 1;
  }
}

export default Car;
