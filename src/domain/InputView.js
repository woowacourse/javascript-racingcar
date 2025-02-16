import { GAME_MESSAGE } from '../constants/systemMessages.js';
import readLineAsync from '../view/readLineAsync.js';

const InputView = Object.freeze({
  async enterCarNames() {
    const inputName = await readLineAsync(GAME_MESSAGE.ENTER_CAR_NAMES);
    return inputName;
  },

  async enterCount() {
    const count = await readLineAsync(GAME_MESSAGE.ENTER_COUNT);
    return count;
  },
});

export default InputView;
