import { systemSetting } from '../settings/systemSetting.js';

export const Validation = {
  isNameNotEmpty(parsedString) {
    return parsedString.every((name) => name.trim().length > 0);
  },
  isNameTooLong(parsedString) {
    return parsedString.every(
      (name) => name.length <= systemSetting.MAX_NAME_LENGTH,
    );
  },
  isNameDuplicate(parsedString) {
    return parsedString.length === new Set(parsedString).size;
  },

  isInteger(input) {
    return Number.isInteger(Number(input));
  },

  isPositive(input) {
    return Number(input) > 0;
  },
};
