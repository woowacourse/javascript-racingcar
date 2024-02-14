import ERRORS from '../constants/errors';

class TrialCount {
  #count;

  constructor(countStr) {
    this.#validate(countStr);
    this.#count = parseInt(countStr);
  }

  getCount() {
    return this.#count;
  }

  #validate(countStr) {
    this.#validateBlank(countStr);
    this.#validateNumber(countStr);
    this.#validatePositive(countStr);
  }

  #validateBlank(countStr) {
    if (countStr.trim().length === 0) {
      throw new Error(ERRORS.trialBlank);
    }
  }
  #validateNumber(countStr) {
    if (isNaN(countStr)) {
      throw new Error(ERRORS.trialNumber);
    }
  }
  #validatePositive(countStr) {
    if (parseInt(countStr) <= 0) {
      throw new Error(ERRORS.trialPositive);
    }
  }
}
