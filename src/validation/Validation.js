export const Validation = {
  isNameEmpty(parsedString) {
    return parsedString.every((name) => name.length > 0);
  },
};
