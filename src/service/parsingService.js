import { ERROR_MESSAGE } from "../settings/ErrorMessage.js";
import { Validation } from "../validation/Validation.js";
import { OutputView } from "../view/OutputView.js";

export const parsingService = {
  parseNames(input) {
    let parsedString = input.split(",");

    if (!Validation.isNameNotEmpty(parsedString)) {
      throw new Error(ERROR_MESSAGE.HAS_EMPTY_NAME);
    }
    if (!Validation.isNameTooLong(parsedString)) {
      throw new Error(ERROR_MESSAGE.NAME_TOO_LONG);
    }
    if (!Validation.isNameDuplicate(parsedString)) {
      throw new Error(ERROR_MESSAGE.DUPLICATE_NAME);
    }
    return parsedString;
  },
  parseRound(input) {
    if (!Validation.isInteger(input)) {
      throw new Error(ERROR_MESSAGE.NOT_INTEGER);
    }
    if (!Validation.isNegative(input)) {
      throw new Error(ERROR_MESSAGE.NOT_POSITIVE);
    }
    return Number(input);
  },
  tryParse(parser, input) {
    let parsedValue;
    try {
      parsedValue = parser(input);
    } catch (error) {
      OutputView.printError(error);
    }
    return parsedValue;
  },
  async parseInput(getInput, parser) {
    while (true) {
      const input = await getInput();
      let parsedInput = this.tryParse(parser, input);
      if (parsedInput) return parsedInput;
    }
  },
};
