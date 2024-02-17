const CustomError = require('./customError.js');
const { ERROR_MESSAGES } = require('../constant/Messages.js');
const { RULES, SYMBOL, REGEXP } = require('../constant/Conditions.js');

const ValidatorCondtion = {
  carCountRange(carCount) {
    if (carCount < RULES.minCarCount || carCount > RULES.maxCarCount) {
      throw new CustomError(ERROR_MESSAGES.invalidCarCountRange);
    }
  },

  carNameEmpty(carNames) {
    if (carNames.some((carName) => carName === '')) {
      throw new CustomError(ERROR_MESSAGES.carNameEmpty);
    }
  },

  carNameDuplicate(carNames) {
    const uniqueCarNames = new Set(carNames);
    if (uniqueCarNames.size !== carNames.length) {
      throw new CustomError(ERROR_MESSAGES.carNameDuplicate);
    }
  },

  carNameLength(carNames) {
    if (carNames.some((carName) => carName.length > RULES.maxCarNameLength)) {
      throw new CustomError(ERROR_MESSAGES.invalidCarNameLength);
    }
  },

  carNameInSpace(carNames) {
    if (carNames.some((carName) => carName.includes(SYMBOL.space))) {
      throw new CustomError(ERROR_MESSAGES.carNameInSpace);
    }
  },

  isNaN(value) {
    if (!REGEXP.numericPattern.test(value)) {
      throw new CustomError(ERROR_MESSAGES.NaN);
    }
  },

  tryCountRange(tryCount) {
    if (tryCount < RULES.minTryCount || tryCount > RULES.maxTryCount) {
      throw new CustomError(ERROR_MESSAGES.invalidTryCountRange);
    }
  },
};

const Validator = {
  carNames(carNames) {
    ValidatorCondtion.carCountRange(carNames.length);
    ValidatorCondtion.carNameLength(carNames);
    ValidatorCondtion.carNameEmpty(carNames);
    ValidatorCondtion.carNameDuplicate(carNames);
    ValidatorCondtion.carNameInSpace(carNames);
  },

  tryCount(tryCount) {
    ValidatorCondtion.isNaN(tryCount);
    ValidatorCondtion.tryCountRange(tryCount);
  },
};

module.exports = Validator;
