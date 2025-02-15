import MESSAGE from '../constants/Message.js';

export const Validator = {
  isArrayLengthOver: (array, max) => {
    if (array.length > max) {
      throw new Error(MESSAGE.ERROR.IS_ARRAY_LENGTH_OVER);
    }
  },
  isStringLengthOver: (string, max) => {
    const arrayString = [...string];
    if (arrayString.length > max) {
      throw new Error(MESSAGE.ERROR.IS_STRING_LENGTH_OVER);
    }
  },
  isRangeOver: (number, min, max) => {
    if (number < min || number > max) {
      throw new Error(MESSAGE.ERROR.IS_RANGE_OVER(min, max));
    }
  },
  isDecimal: number => {
    if (number % 1 !== 0) {
      throw new Error(MESSAGE.ERROR.IS_DECIMAL);
    }
  },
  isDuplicate: array => {
    const set = new Set(array);
    if (set.size !== array.length) {
      throw new Error(MESSAGE.ERROR.IS_DUPLICATE);
    }
  },
  isNumber: number => {
    if (number === null || typeof number !== 'number' || Number.isNaN(number)) {
      throw new Error(MESSAGE.ERROR.IS_NUMBER);
    }
  },

  isEmpty: string => {
    if (string.trim().length === 0 || string === null) {
      throw new Error(MESSAGE.ERROR.IS_EMPTY);
    }
  },
};
