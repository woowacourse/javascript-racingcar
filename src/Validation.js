const {
  ERROR,
  NAME_MAX_LENGTH,
  NAME_MIN_LENGTH,
  MIN_PARTICIPATE,
  MIN_TRYCOUNT,
} = require('./utils/constants');

const Validation = {
  validateCarName(carNames) {
    this.validateCarNameLength(carNames);
    this.validateCarNameDuplicated(carNames);
    this.validateIsRace(carNames);
  },

  isInRange(value, min, max) {
    if (value > min && value <= max) return true;
    return false;
  },

  validateCarNameLength(carNames) {
    carNames.forEach((carName) => {
      if (!this.isInRange(carName.length, NAME_MIN_LENGTH, NAME_MAX_LENGTH)) {
        throw new Error(ERROR.CAR_NAME_LENGTH);
      }
    });
  },

  validateCarNameDuplicated(carNames) {
    const carSet = new Set(carNames);
    if (carNames.length === carSet.size) return;
    throw new Error(ERROR.CAR_NAME_DUPLICATED);
  },

  validateIsRace(carNames) {
    if (carNames.length >= MIN_PARTICIPATE) return;
    throw new Error(ERROR.NOT_A_RACE);
  },

  validateTryCount(tryCount) {
    this.validateNotANumber(tryCount);
    this.validateRaceCount(tryCount);
  },

  validateNotANumber(tryCount) {
    if (/\d/g.test(tryCount)) return;
    throw new Error(ERROR.TRYCOUNT_NOT_A_NUMBER);
  },

  validateRaceCount(tryCount) {
    if (tryCount >= MIN_TRYCOUNT) return;
    throw new Error(ERROR.TRYCOUNT_UNDER_ONE);
  },
};

module.exports = Validation;
