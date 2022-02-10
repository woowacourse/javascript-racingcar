import { ERROR, MAX_LENGTH } from './constants.js';

export const validateNameInput = (nameList) => {
  if (!nameList) {
    throw new Error(ERROR.EMPTY_INPUT);
  }
  nameList.forEach((name) => {
    if (name.length > MAX_LENGTH) {
      throw new Error(ERROR.LONG_LENGTH);
    }
    if (!name.trim()) {
      throw new Error(ERROR.EMPTY_INPUT);
    }
  });
};
