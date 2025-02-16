import { CONFIG } from '../constants/config.js';
import { ERROR } from '../constants/messages.js';
import { _pipe } from '../utils/utils.js';

const checkPositiveNumber = (attempts) => {
  if (!Number.isInteger(attempts) || attempts <= CONFIG.ZERO) {
    throw new Error(ERROR.NOT_POSITIVE_NUMBER);
  }

  return attempts;
};

const attemptsValidator = _pipe(checkPositiveNumber);

export default attemptsValidator;

