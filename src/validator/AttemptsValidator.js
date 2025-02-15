import { CONFIG } from '../constants/config.js';
import { ERROR } from '../constants/messages.js';

const AttemptsValidator = {
  checkPositiveNumber(attempts) {
    if (!Number.isInteger(attempts) || attempts <= CONFIG.ZERO) {
      throw new Error(ERROR.NOT_POSITIVE_NUMBER);
    }

    return attempts;
  },
};

export default AttemptsValidator;
