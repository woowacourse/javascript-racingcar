import MESSAGE from '../constants/Message.js';

export const Validator = {
  // Boolean 반환 함수
  isArrayLengthOver: (array, max) => array.length > max,
  isStringLengthOver: (string, max) => [...string].length > max,
  isRangeOver: (number, min, max) => number < min || number > max,
  isDecimal: number => number % 1 !== 0,
  isDuplicate: array => new Set(array).size !== array.length,
  isNumber: number => number !== null && typeof number === 'number' && !Number.isNaN(number),
  isEmpty: string => string.trim().length === 0 || string === null,

  // 예외를 던지는 함수
  validateArrayLength: (array, max) => {
    if (Validator.isArrayLengthOver(array, max)) {
      throw new Error(MESSAGE.ERROR.IS_ARRAY_LENGTH_OVER);
    }
  },
  validateStringLength: (string, max) => {
    if (Validator.isStringLengthOver(string, max)) {
      throw new Error(MESSAGE.ERROR.IS_STRING_LENGTH_OVER);
    }
  },
  validateRange: (number, min, max) => {
    if (Validator.isRangeOver(number, min, max)) {
      throw new Error(MESSAGE.ERROR.IS_RANGE_OVER(min, max));
    }
  },
  validateDecimal: number => {
    if (Validator.isDecimal(number)) {
      throw new Error(MESSAGE.ERROR.IS_DECIMAL);
    }
  },
  validateDuplicate: array => {
    if (Validator.isDuplicate(array)) {
      throw new Error(MESSAGE.ERROR.IS_DUPLICATE);
    }
  },
  validateNumber: number => {
    if (!Validator.isNumber(number)) {
      throw new Error(MESSAGE.ERROR.IS_NUMBER);
    }
  },
  validateEmpty: string => {
    if (Validator.isEmpty(string)) {
      throw new Error(MESSAGE.ERROR.IS_EMPTY);
    }
  },
};
