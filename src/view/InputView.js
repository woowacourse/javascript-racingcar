import { SYSTEM_MESSAGE } from "../constants/SystemMessage.js";
import readLineAsync from "../utils/readLineAsync.js";

class InputView {
  async getCarNames() {
    return await readLineAsync(SYSTEM_MESSAGE.INPUT_CAR_NAME);
  }

  async getTryCount() {
    return await readLineAsync(SYSTEM_MESSAGE.INPUT_TRY_COUNT);
  }
}

export default InputView;
