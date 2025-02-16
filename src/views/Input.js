import Console from "../utils/Console.js";
import { INPUT_PROMPT_MESSAGE } from "../constants/constants.js";

const Input = {
  carNames() {
    return Console.readLineAsync(INPUT_PROMPT_MESSAGE.CAR_NAMES);
  },
  tryCount() {
    return Console.readLineAsync(INPUT_PROMPT_MESSAGE.TRY_COUNT);
  },
};

export default Input;
