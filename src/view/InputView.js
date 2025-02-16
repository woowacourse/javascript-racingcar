import readLineAsync from '../utils/readLineAsync.js';
import { GAME_MESSAGE, SEPARATOR } from '../constants/systemMessages.js';
import validator from '../utils/validator.js';

class InputView {
  static async enterCarNames() {
    const inputName = await readLineAsync(GAME_MESSAGE.ENTER_CAR_NAMES);
    const names = inputName.split(SEPARATOR);
    validator.carNames(names);

    return names;
  }

  static async enterCount() {
    const count = await readLineAsync(GAME_MESSAGE.ENTER_COUNT);
    validator.count(count);

    return count;
  }
}

export default InputView;
