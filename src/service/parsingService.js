export const parsingService = {
  parseNames(input) {
    let parsedString = input.split(",");

    isNameEmpty(parsedString);
    isNameTooLong(parsedString);
    return result;
  },
};
