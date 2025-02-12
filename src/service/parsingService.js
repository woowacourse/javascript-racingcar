const INVALID = false;
const VALID = true;

export const parsingService = {
  parseNames(input) {
    let parsedString = input.split(",");
    if (isNameEmpty(parsedString)) {
      return INVALID;
    }
    if (isNameTooLong(parsedString)) {
      return INVALID;
    }
    return parsedString;
  },
};
