import runValidators from "../../utils/runValidators.js";
import throwError from "../../utils/throwError.js";
import { ATTEMPT_ERROR_MESSAGES } from "../../constants/Constants.js";
import IsValidAttemptCount from "../isValid/isValidAttemptCount.js";

const validateInteger = (attemptCount) => {
  if (!IsValidAttemptCount.integer(attemptCount)) {
    throwError(ATTEMPT_ERROR_MESSAGES.NOT_INTEGER);
  }
};

const validatePlus = (attemptCount) => {
  if (!IsValidAttemptCount.plus(attemptCount)) {
    throwError(ATTEMPT_ERROR_MESSAGES.MINUS);
  }
};

const validateAttemptCount = (attempt) => runValidators([validateInteger, validatePlus], attempt);

export default validateAttemptCount;