import runValidators from "../utils/runValidators.js";
import throwError from "../utils/throwError.js";
import { ATTEMPT_ERROR_MESSAGES } from "../constants/Constants.js";

const checkEmptyInput = (attemptCount) => {
  if (attemptCount.length === 0) {
    throwError(ATTEMPT_ERROR_MESSAGES.EMPTY_INPUT);
  }
};
const checkInteger = (attemptCount) => {
  if (!Number.isInteger(attemptCount)) {
    throwError(ATTEMPT_ERROR_MESSAGES.NOT_INTEGER_INPUT);
  }
};

const checkPlusNumber = (attemptCount) => {
  if (attemptCount <= 0) {
    throwError(ATTEMPT_ERROR_MESSAGES.MINUS_INPUT);
  }
};

const validateAttemptCount = (attempt) => runValidators([checkEmptyInput, checkInteger, checkPlusNumber], attempt);

export default validateAttemptCount;
