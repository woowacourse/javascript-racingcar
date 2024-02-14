import MESSAGE from "../constants/Message";
import readLineAsync from "../utils/readLineAsync";

class InputView {
  async readCarNames() {
    const carNames = await readLineAsync(MESSAGE.readCarNames);

    return carNames;
  }

  async readAttempt() {
    const attempt = await readLineAsync(MESSAGE.readAttempt);

    return attempt;
  }
}

export default InputView;
