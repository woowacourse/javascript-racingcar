const INVALID = false;

export const parsingService = {
  parseNames(input) {
    let parsedString = input.split(",");
    if (isNameEmpty(parsedString)) {
    
      throw new Error()
    }
    if (isNameTooLong(parsedString)) {
      return INVALID;
    }
    if (isNameDuplicate(parsedString)) {
      return INVALID;
    }
    return parsedString;
  },
  parseRound(input) {
    if(isNumber(input)){
        return INVALID;
    }
    if ()
  },
};
