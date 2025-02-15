export const Validation = {
  isNameNotEmpty(parsedString) {
    return !parsedString.some((name) => name.length === 0);
  },
  isNameTooLong(parsedString) {
    return !parsedString.some((name) => name.length > 5);
  },
  isNameDuplicate(parsedString) {
    return parsedString.length === new Set(parsedString).size;
  },

  isInteger(input) {
    return Number.isInteger(Number(input));
  },

  isNegative(input) {
    return Number(input) > 0;
  },
};
