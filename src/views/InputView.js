import asyncReadLineHandler from '../utils/asyncReadLineHandler.js';
import PROGRESS_MESSAGE from '../constants/messages/progressMessage.js';
import DELIMITER from '../constants/delimiter.js';

const InputView = {
  async inputCarNames() {
    const names = await asyncReadLineHandler(PROGRESS_MESSAGE.INPUT_CAR_NAMES);
    return names.split(DELIMITER.CAR_NAME_SEPARATOR).map((name) => name.trim());
  },

  async inputCountOfAttempt() {
    const count = await asyncReadLineHandler(PROGRESS_MESSAGE.INPUT_ATTEMPT_NUMBERS);
    return Number(count);
  },
};

export default InputView;
