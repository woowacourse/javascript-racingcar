const { CAR_RULE, ERROR_MESSAGE } = require('../../constants');
const { StringValidator, ArrayValidator } = require('../../utils');

const isAllowedCarNames = (carNames) => {
  return carNames.every((carName) => StringValidator.isAlphabetOrKorean(carName));
};

const validateCarNames = (cars) => {
  const carNames = cars.split(CAR_RULE.NAME_SEPARATOR);
  if (!isAllowedCarNames(carNames)) {
    throw new Error(ERROR_MESSAGE.INVALID_CHARACTER);
  }
  if (!ArrayValidator.isLengthMoreThanOne(carNames)) {
    throw new Error(ERROR_MESSAGE.INVALID_CAR_COUNT);
  }
  if (ArrayValidator.hasDuplicatedElement(carNames)) {
    throw new Error(ERROR_MESSAGE.DUPLICATED_CAR_NAME);
  }
};

module.exports = validateCarNames;
