export const Validation = {
  isNameNotEmpty(parsedString) {
    return parsedString.every((name) => name.length > 0);
  },
  isNameTooLong(parsedString) {
    return parsedString.every((name) => name.length <= 5);
  },
};
