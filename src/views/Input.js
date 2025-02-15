import Console from "../utils/Console.js";
import { INPUT_PROMPT_MESSAGE } from "../constants/constants.js";

const Input = {
  async carName() {
    return await Console.readLineAsync(INPUT_PROMPT_MESSAGE.CAR_NAMES);
  },
  async tryCount() {
    return await Console.readLineAsync(INPUT_PROMPT_MESSAGE.TRY_COUNT);
  },
};

export default Input;
