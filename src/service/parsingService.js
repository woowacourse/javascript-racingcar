const INVALID = false;
import { errorMessage } from "../settings/ErrorMessage.js";

export const parsingService = {
  parseNames(input) {
    let parsedString = input.split(",");
    if (isNameEmpty(parsedString)) {
      throw new Error(errorMessage.HAS_EMPTY_NAME);
    }
    if (isNameTooLong(parsedString)) {
      throw new Error(errorMessage.NAME_TOO_LONG);
    }
    if (isNameDuplicate(parsedString)) {
      throw new Error(errorMessage.DUPLICATE_NAME);
    }
    return parsedString;
  },
  parseRound(input) {
    if (isNumber(input)) {
      throw new Error(errorMessage.NOT_A_NUMBER);
    }
    if (isNegative(input)) {
      throw new Error(errorMessage.NOT_POSITIVE);
    }
  },
};
