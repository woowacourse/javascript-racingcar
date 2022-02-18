import { MESSAGE, NUMBER } from './constants.js';

export const validateNameInput = (nameList) => {
  if (!nameList) {
    throw new Error(MESSAGE.EMPTY_INPUT);
  }
  nameList.forEach((name) => {
    if (name.length > NUMBER.MAX_LENGTH) {
      throw new Error(MESSAGE.LONG_LENGTH);
    }
    if (!name.trim()) {
      throw new Error(MESSAGE.EMPTY_INPUT);
    }
  });
  if (nameList.length !== new Set(nameList).size) {
    throw new Error(MESSAGE.DUPLICATE_NAME);
  }
};

export const validateCountInput = (count) => {
  if (count < NUMBER.MIN_NUMBER) {
    throw new Error(MESSAGE.UNDER_MIN_NUMBER);
  }
  if (count !== Math.floor(count)) {
    throw new Error(MESSAGE.DECIMAL);
  }
};
