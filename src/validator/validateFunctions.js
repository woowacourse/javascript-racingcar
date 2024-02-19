import DELIMITER from '../constants/delimiter.js';
import REGEX_CONFIG from '../constants/configs/regexConfig.js';

export const isValidMinLength = (inputValue, conditionValue) => {
  return inputValue.toString().trim().length < (conditionValue || 0);
};

export const isValidMaxLength = (inputValue, conditionValue) => {
  return inputValue.toString().trim().length <= (conditionValue || 0);
};

export const isValidMinValue = (inputValue, conditionValue) => {
  return Number(inputValue) > (conditionValue || 0);
};

export const isValidMaxValue = (inputValue, conditionValue) => {
  return Number(inputValue) <= (conditionValue || 0);
};

export const notIncludesNoSpace = (inputValue) => {
  return inputValue.toString().includes(DELIMITER.SPACE);
};

export const notIncludesSpecialCharacter = (inputValue) => {
  return REGEX_CONFIG.SPECIAL_CHARACTER.test(inputValue.toString());
};

export const isValidDuplication = (inputArr) => {
  return new Set([...inputArr]).size === inputArr.length;
};

export const isValidInteger = (inputValue) => {
  return Number.isInteger(Number(inputValue));
};
