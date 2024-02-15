import MESSAGES from '../constants/messages.js';
import ERRORS from '../constants/errors.js';

class Cars {
  #names;
  #positions;

  constructor(carStr) {
    this.#validate(carStr);
    this.#names = carStr.split(',').map(car => car.trim());
    this.#positions = [...Array(this.#names.length)].map(() => 0);
  }

  progress(randoms) {
    randoms.forEach((random, index) => {
      this.#positions[index] += random >= 4 ? 1 : 0;
    });
  }

  getState() {
    return [this.#names, this.#positions];
  }

  getCarsCount() {
    return this.#names.length;
  }

  #validateLength(carStr) {
    if (carStr.split(',').some(car => car.trim().length > 5)) {
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
}

export default Cars;
