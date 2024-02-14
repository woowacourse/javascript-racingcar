import MESSAGES from '../constants/messages.js';
import ERRORS from '../constants/errors.js';

class Cars {
  #validateLength(carStr) {
    if (carStr.split(',').some(car => car.length > 5)) {
      throw new Error(ERRORS.carNameLength);
    }
  }

  #validateBlank(carStr) {
    if (carStr.split(',').some(car => car.trim().length === 0)) {
      throw new Error(ERRORS.carNameBlank);
    }
  }

  #validate(carStr) {
    this.#validateLength(carStr);
    this.#validateBlank(carStr);
  }

  constructor(carStr) {
    this.#validate(carStr);
  }
}

export default Cars;
