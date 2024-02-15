const CustomError = require('./customError.js');
const CONDITIONS = require('../constant/Conditions.js');
const { ERROR_MESSAGES } = require('../constant/messages.js');

const ValidatorCondtion = {
  carCountRange(carCount) {
    if (carCount < CONDITIONS.minCarCount || carCount > CONDITIONS.maxCarCount) {
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
    if (carNames.some((carName) => carName.length > CONDITIONS.maxCarNameLength)) {
      throw new CustomError(ERROR_MESSAGES.invalidCarNameLength);
    }
  },

  carNameInSpace(carNames) {
    if (carNames.some((carName) => carName.includes(CONDITIONS.space))) {
      throw new CustomError(ERROR_MESSAGES.carNameInSpace);
    }
  },

  isNaN(value) {
    if (!CONDITIONS.numericPattern.test(value)) {
      throw new CustomError(ERROR_MESSAGES.NaN);
    }
  },

  tryCountRange(tryCount) {
    if (tryCount < CONDITIONS.minTryCount || tryCount > CONDITIONS.maxTryCount) {
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
