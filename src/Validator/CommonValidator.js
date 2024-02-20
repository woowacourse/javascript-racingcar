import { ERROR_MESSAGES, SYMBOL } from '../constanst';
import { AppError } from '../utils';

const { EMPTY_INPUT, SPACE_IN_INPUT } = ERROR_MESSAGES;
const { BLANK, SPACE } = SYMBOL;

const CommonValidator = (() => {
  const checkEmpty = (input) => {
    if (input === BLANK) {
      throw new AppError(EMPTY_INPUT);
    }
  };

  const checkExistSpace = (input) => {
    if (input.includes(SPACE)) {
      throw new AppError(SPACE_IN_INPUT);
    }
  };

  return {
    check: (input) => {
      checkEmpty(input);
      checkExistSpace(input);
    },
  };
})();

export default CommonValidator;
