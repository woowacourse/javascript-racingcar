const RACE_ERROR_MESSAGE = require('../Constant/ErrorMessage');
const ValidatorConditions = require('../Utils/ValidatorConditions');

class TryCount {
  #tryCount;

  constructor(count) {
    this.validate(count);
    this.#tryCount = count;
  }

  validate(count) {
    if (ValidatorConditions.isTryCountSmallerThanOne(count)) {
      throw new Error(RACE_ERROR_MESSAGE.rangeOfTryCount);
    }

    if (ValidatorConditions.isNotNumber(count)) {
      throw new Error(RACE_ERROR_MESSAGE.rangeOfTryCount);
    }
  }

  getTryCount() {
    return this.#tryCount;
  }
}

module.exports = TryCount;
