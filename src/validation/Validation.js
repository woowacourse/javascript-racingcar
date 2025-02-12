export const Validation = {
  isNameNotEmpty(parsedString) {
    return parsedString.every((name) => name.length > 0);
  },
  isNameTooLong(parsedString) {
    return parsedString.every((name) => name.length <= 5);
  },
  isNameDuplicate(parsedString) {
    return parsedString.length === new Set(parsedString).size;
  },

  isNumber(input) {
    return !Number.isNaN(input);
  },
};
