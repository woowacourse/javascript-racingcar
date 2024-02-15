import { CONSOLE_MESSAGE } from "../constants/message.js";
import { readLineAsync } from "../utils/console.js";

class InputView {
  static async readCarNames() {
    return await readLineAsync(CONSOLE_MESSAGE.carNamesQuery + "\n");
  }

  static async readRoundNumber() {
    return await readLineAsync(CONSOLE_MESSAGE.roundNumberQuery + "\n");
  }
}

export default InputView;
