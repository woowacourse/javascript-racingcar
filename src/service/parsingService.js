import { Validation } from "../validation/Validation.js";
import { systemSetting } from "../constants/systemSetting.js";
import { errorMessage } from "../constants/ErrorMessage.js";

export const parsingService = {
  parseNames(input) {
    let parsedString = input.split(",");

    if (!Validation.isNameNotEmpty(parsedString)) {
      throw new Error(errorMessage.HAS_EMPTY_NAME);
    }
    if (!Validation.isNameLengthValid(parsedString)) {
      throw new Error(errorMessage.NAME_TOO_LONG(systemSetting.NAME_LIMIT));
    }
    if (!Validation.isNameNotDuplicate(parsedString)) {
      throw new Error(errorMessage.DUPLICATE_NAME);
    }
    return parsedString;
  },
  parseRound(input) {
    if (!Validation.isInteger(input)) {
      throw new Error(errorMessage.NOT_INTEGER);
    }
    if (!Validation.isPositive(input)) {
      throw new Error(errorMessage.NOT_POSITIVE);
    }
    return Number(input);
  },
};
