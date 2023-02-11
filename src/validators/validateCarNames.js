const { ERROR_MESSAGE } = require('../constants/message');
const { CAR_RULE } = require('../constants/rule');
const { CharacterValidator, ArrayValidator } = require('../utils/Validator');

const isAllowedCharacter = (carName) => {
  return (
    CharacterValidator.isOnlyAlphabet(carName) ||
    CharacterValidator.isOnlyKorean(carName) ||
    CharacterValidator.isAlphabetOrKorean(carName)
  );
};

const isAllowedCarNames = (carNames) => {
  return carNames.every((carName) => isAllowedCharacter(carName));
};

const validateCarNames = (cars) => {
  const carNames = cars.split(CAR_RULE.separator);
  if (!isAllowedCarNames(carNames)) {
    throw new Error(ERROR_MESSAGE.nameCharacter);
  }
  if (!ArrayValidator.isLengthMoreThanOne(carNames)) {
    throw new Error(ERROR_MESSAGE.nameSeparator);
  }
  if (ArrayValidator.isDuplicated(carNames)) {
    throw new Error(ERROR_MESSAGE.duplicatedCarName);
  }
};

module.exports = validateCarNames;
