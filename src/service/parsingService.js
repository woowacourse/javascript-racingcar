import { errorMessage } from "../constants/ErrorMessage.js";
import { Validation } from "../validation/Validation.js";
import { OutputView } from "../view/OutputView.js";
import { systemSetting } from "../constants/systemSetting.js";

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
