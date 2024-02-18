import DELIMITER from '../../constants/delimiters/delimter.js';
import REGEX_CONFIG from '../../constants/configs/regexConfig.js';
import AppError from '../../errors/AppError.js';
import ERROR_MESSAGE from '../../constants/messages/errorMessage.js';

export const validateMinLength = (inputValue, conditionValue) => {
  if (inputValue.toString().trim().length < (conditionValue || 0)) {
    throw new AppError(ERROR_MESSAGE.OUT_OF_RANGE);
  }
};

export const validateMaxLength = (inputValue, conditionValue) => {
  if (inputValue.toString().trim().length > (conditionValue || 0)) {
    throw new AppError(ERROR_MESSAGE.OUT_OF_RANGE);
  }
};

export const validateRequire = (inputValue) => {
  return inputValue.toString().trim().length > 0;
};

export const validateMinValue = (inputValue, conditionValue) => {
  if (+inputValue <= (conditionValue || 0)) {
    throw new AppError(ERROR_MESSAGE.NOT_NATURAL_NUMBER);
  }
};

export const validateMaxValue = (inputValue, conditionValue) => {
  if (+inputValue > (conditionValue || 0)) {
    throw new AppError(ERROR_MESSAGE.OVER_LIMIT_COUNT);
  }
};

export const validateNoSpace = (inputValue) => {
  return inputValue.toString().includes(DELIMITER.SPACE);
};

export const validateSpecialCharacter = (inputValue) => {
  if (REGEX_CONFIG.SPECIAL_CHARACTER.test(inputValue.toString())) {
    throw new AppError(ERROR_MESSAGE.HAVE_SPECIAL_CHARACTERS);
  }
};

export const validateDuplication = (inputArr) => {
  if (new Set([...inputArr]).size !== inputArr.length) {
    throw new AppError(ERROR_MESSAGE.HAVE_DUPLICATION);
  }
};

export const validateInteger = (inputValue) => {
  if (!Number.isInteger(+inputValue)) {
    throw new AppError(ERROR_MESSAGE.NOT_INTEGER);
  }
};
