import { withTryCatch } from "../util/errorHandler.js";
import { Validation } from "../validation/Validation.js";
import { ERROR_MESSAGE } from "../settings/ErrorMessage.js";

export const parsingService = {
  tryParse: (parser) => withTryCatch(parser),

  parseNames(input) {
    let nameList = input.split(",");

    if (!Validation.isNameNotEmpty(nameList)) {
      throw new Error(ERROR_MESSAGE.HAS_EMPTY_NAME);
    }
    if (!Validation.isNameTooLong(nameList)) {
      throw new Error(ERROR_MESSAGE.NAME_TOO_LONG);
    }
    if (!Validation.isNameDuplicate(nameList)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
    }
    return nameList;
  },

  parseRound(input) {
    if (!Validation.isInteger(input)) {
      throw new Error(ERROR_MESSAGE.NOT_INTEGER);
    }
    if (!Validation.isPositive(input)) {
      throw new Error(ERROR_MESSAGE.NOT_POSITIVE);
    }
    return Number(input);
  },

  async parseInput(getInput, parser) {
    const safeParser = this.tryParse(parser);
    while (true) {
      const input = await getInput();
      const result = safeParser(input);
      //!result를 쓰는것은 조금 위험해서..
      if (result !== undefined) return result;
    }
  },
};
