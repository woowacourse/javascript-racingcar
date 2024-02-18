const throwErrorIfFalse = require('./throwErrorIfFalse.js');
const { ERROR_MESSAGES } = require('../constant/Messages.js');
const { RULES, SYMBOL, REGEXP } = require('../constant/Conditions.js');

const ValidatorCondtion = {
  checkCarCountRange(carCount) {
    if (carCount < RULES.minCarCount || carCount > RULES.maxCarCount) {
      return false;
    }
    return true;
  },

  checkCarNameIsEmpty(carNames) {
    if (carNames.some((carName) => carName === '')) {
      return false;
    }
    return true;
  },

  checkCarNameIsDuplicate(carNames) {
    const uniqueCarNames = new Set(carNames);
    if (uniqueCarNames.size !== carNames.length) {
      return false;
    }
    return true;
  },

  checkCarNameLength(carNames) {
    if (carNames.some((carName) => carName.length > RULES.maxCarNameLength)) {
      return false;
    }
    return true;
  },

  checkCarNameInSpace(carNames) {
    if (carNames.some((carName) => carName.includes(SYMBOL.space))) {
      return false;
    }
    return true;
  },

  checkIsNaN(value) {
    if (!REGEXP.numericPattern.test(value)) {
      return false;
    }
    return true;
  },

  checkTryCountRange(tryCount) {
    if (tryCount < RULES.minTryCount || tryCount > RULES.maxTryCount) {
      return false;
    }
    return true;
  },
};

const Validator = {
  carNames(carNames) {
    throwErrorIfFalse(ValidatorCondtion.checkCarNameIsEmpty(carNames), ERROR_MESSAGES.carNameEmpty);
    throwErrorIfFalse(ValidatorCondtion.checkCarNameIsDuplicate(carNames), ERROR_MESSAGES.carNameDuplicate);
    throwErrorIfFalse(ValidatorCondtion.checkCarNameLength(carNames), ERROR_MESSAGES.invalidCarNameLength);
    throwErrorIfFalse(ValidatorCondtion.checkCarNameInSpace(carNames), ERROR_MESSAGES.carNameInSpace);
    throwErrorIfFalse(ValidatorCondtion.checkCarCountRange(carNames), ERROR_MESSAGES.invalidCarCountRange);
  },

  tryCount(tryCount) {
    throwErrorIfFalse(ValidatorCondtion.checkIsNaN(tryCount), ERROR_MESSAGES.NaN);
    throwErrorIfFalse(ValidatorCondtion.checkTryCountRange(tryCount), ERROR_MESSAGES.invalidTryCountRange);
  },
};

module.exports = Validator;
