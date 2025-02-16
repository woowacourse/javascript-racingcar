import { GAME_MESSAGE, SEPARATOR } from '../constants/systemMessages.js';
import InputValidator from './InputValidator.js';
import readLineAsync from './readLineAsync.js';

const InputView = Object.freeze({
  async enterCarNames() {
    const inputName = await readLineAsync(GAME_MESSAGE.ENTER_CAR_NAMES);
    const names = inputName.split(SEPARATOR);
    InputValidator.carNames(names);

    return names;
  },

  async enterCount() {
    const count = await readLineAsync(GAME_MESSAGE.ENTER_COUNT);
    InputValidator.count(count);

    return count;
  },
});

export default InputView;
