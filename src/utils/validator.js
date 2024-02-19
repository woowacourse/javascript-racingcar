const throwErrorIfFalse = require('./throwErrorIfFalse.js');
const { ERROR_MESSAGES } = require('../constant/Messages.js');
const { RULES, SYMBOL, REGEXP } = require('../constant/Conditions.js');

const ValidatorCondtion = {
  checkCarCountRange(carCount) {
    return carCount >= RULES.minCarCount && carCount <= RULES.maxCarCount;
  },

  checkCarNameIsEmpty(carNames) {
    return carNames.every((carName) => carName !== '');
  },

  checkCarNameIsDuplicate(carNames) {
    const uniqueCarNames = new Set(carNames);

    return uniqueCarNames.size === carNames.length;
  },

  checkCarNameLength(carNames) {
    return carNames.every((carName) => carName.length <= RULES.maxCarNameLength);
  },

  checkCarNameInSpace(carNames) {
    return carNames.every((carName) => !carName.includes(SYMBOL.space));
  },

  checkIsNaN(value) {
    return REGEXP.numericPattern.test(value);
  },

  checkTryCountRange(tryCount) {
    return tryCount >= RULES.minTryCount && tryCount <= RULES.maxTryCount;
  },
};

const Validator = {
  carNames(carNames) {
    throwErrorIfFalse(ValidatorCondtion.checkCarNameIsEmpty(carNames), ERROR_MESSAGES.carNameEmpty);
    throwErrorIfFalse(ValidatorCondtion.checkCarNameIsDuplicate(carNames), ERROR_MESSAGES.carNameDuplicate);
    throwErrorIfFalse(ValidatorCondtion.checkCarNameLength(carNames), ERROR_MESSAGES.invalidCarNameLength);
    throwErrorIfFalse(ValidatorCondtion.checkCarNameInSpace(carNames), ERROR_MESSAGES.carNameInSpace);
    throwErrorIfFalse(ValidatorCondtion.checkCarCountRange(carNames.length), ERROR_MESSAGES.invalidCarCountRange);
  },

  tryCount(tryCount) {
    throwErrorIfFalse(ValidatorCondtion.checkIsNaN(tryCount), ERROR_MESSAGES.NaN);
    throwErrorIfFalse(ValidatorCondtion.checkTryCountRange(tryCount), ERROR_MESSAGES.invalidTryCountRange);
  },
};

module.exports = Validator;
