import MESSAGE from "../constants/Message.js";
import readLineAsync from "../utils/readLineAsync.js";

class InputView {
  static async readCarNames() {
    const carNames = await readLineAsync(MESSAGE.readCarNames);

    return carNames;
  }

  static async readAttempt() {
    const attempt = await readLineAsync(MESSAGE.readAttempt);

    return attempt;
  }
}

export default InputView;
