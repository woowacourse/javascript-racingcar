import ERRORS from '../constant/Errors.js';

class TrialCount {
  #count;

  constructor(countStr) {
    this.#validate(countStr.trim());
    this.#count = parseInt(countStr.trim());
  }

  getCount() {
    return this.#count;
  }

  #validate(countStr) {
    this.#validateBlank(countStr);
    this.#validateNumber(countStr);
    this.#validatePositive(countStr);
    this.#validateInteger(countStr);
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

  #validateInteger(countStr) {
    const isInteger = parseInt(countStr).toString() !== countStr;
    if (isInteger) {
      throw new Error(ERRORS.trialInteger);
    }
  }
}

export default TrialCount;
