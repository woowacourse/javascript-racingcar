const RACE_ERROR_MESSAGE = require('../Constant/ErrorMessage');

class TryCount {
  #tryCount;

  constructor(count) {
    this.validate(count);
    this.#tryCount = count;
  }

  validate(count) {
    if (count < 1) {
      throw new Error(RACE_ERROR_MESSAGE.rangeOfTryCount);
    }

    if (!/^[0-9]+$/.test(count)) {
      throw new Error(RACE_ERROR_MESSAGE.rangeOfTryCount);
    }
  }

  getTryCount() {
    return this.#tryCount;
  }
}

module.exports = TryCount;
