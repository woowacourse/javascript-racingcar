import runValidators from "../utils/runValidators.js";
import throwError from "../utils/throwError.js";

export const ATTEMPT_ERROR_MESSAGES = {
  EMPTY_INPUT: "입력이 비어 있습니다.",
  NOT_INTEGER_INPUT: "정수를 입력해주세요.",
  MINUS_INPUT: "0보다 큰 수를 입력해주세요.",
};

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
