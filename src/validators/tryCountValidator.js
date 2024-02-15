import { ERROR_MESSAGES } from '../constants/car-race';
import InvalidInputException from '../exceptions/InvalidInputException';

const tryCountValidator = {
  isNumeric(tryCount) {
    if (!Number.isInteger(tryCount)) {
      throw new InvalidInputException(ERROR_MESSAGES.tryCount);
    }
  },

  isPositive(tryCount) {
    if (tryCount <= 0) {
      throw new InvalidInputException(ERROR_MESSAGES.tryCount);
    }
  },

  validate(tryCount) {
    const convertToNumber = Number(tryCount);
    this.isNumeric(convertToNumber);
    this.isPositive(convertToNumber);
  },
};

export default tryCountValidator;
