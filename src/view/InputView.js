import MESSAGE from "../constants/Message.js";
import readLineAsync from "../utils/readLineAsync.js";

const InputView = {
  readCarNames: async () => {
    const carNamesInput = await readLineAsync(MESSAGE.readCarNames);
    return carNamesInput;
  },

  readAttempt: async () => {
    const attemptInput = await readLineAsync(MESSAGE.readAttempt);
    return attemptInput;
  },
};

export default InputView;
