import { errorMessage } from "../settings/ErrorMessage.js";
import { Validation } from "../validation/Validation.js";

const INVALID = false;

export const parsingService = {
  parseNames(input) {
    let parsedString = input.split(",");

    if (!Validation.isNameNotEmpty(parsedString)) {
      throw new Error(errorMessage.HAS_EMPTY_NAME);
    }
    if (!Validation.isNameTooLong(parsedString)) {
      throw new Error(errorMessage.NAME_TOO_LONG);
    }
    if (!Validation.isNameDuplicate(parsedString)) {
      throw new Error(errorMessage.DUPLICATE_NAME);
    }
    return parsedString;
  },
  parseRound(input) {
    if (!Validation.isInteger(input)) {
      throw new Error(errorMessage.NOT_A_NUMBER);
    }
    if (!Validation.isNegative(input)) {
      throw new Error(errorMessage.NOT_POSITIVE);
    }
    return Number(input);
  },
};
