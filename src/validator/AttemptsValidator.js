import { ERROR } from '../constants/messages.js';

const AttemptsValidator = {
  checkPositiveNumber(input) {
    const attempts = Number(input);
    if (!Number.isInteger(attempts) || attempts <= 0) {
      throw new Error(ERROR.NOT_POSITIVE_NUMBER);
    }

    return attempts;
  },
};

export default AttemptsValidator;
