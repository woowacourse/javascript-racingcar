import Console from "../utils/Console.js";
import validateCarNames from "../validation/validateCarNames.js";
import validateTryCount from "../validation/validateTryCount.js";
import { INPUT_PROMPT_MESSAGE } from "../constants/constants.js";

const Input = {
  async carName() {
    try {
      const input = await Console.readLineAsync(INPUT_PROMPT_MESSAGE.CAR_NAMES);
      return validateCarNames(input);
    } catch (error) {
      Console.printErrorMessage(error.message);
      return this.carName();
    }
  },
  async tryCount() {
    try {
      const input = await Console.readLineAsync(INPUT_PROMPT_MESSAGE.TRY_COUNT);
      return validateTryCount(input);
    } catch (error) {
      Console.printErrorMessage(error.message);
      return this.tryCount();
    }
  },
};

export default Input;
