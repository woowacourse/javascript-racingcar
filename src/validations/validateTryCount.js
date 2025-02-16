import { ERROR_TRY_COUNT_MESSAGE } from "../constants/constants.js";

const MIN_TRY_COUNT = 1;
const MAX_TRY_COUNT = 50;

const parseTryCount = (input) => Number(input);

const isInvalidNumber = (tryCount) => {
  return Number.isNaN(tryCount);
};

const isNotInteger = (tryCount) => {
  return !Number.isInteger(tryCount);
};

const isOutOfRange = (tryCount) => {
  return tryCount < MIN_TRY_COUNT || tryCount > MAX_TRY_COUNT;
};

const validateTryCount = (input) => {
  const tryCount = parseTryCount(input);

  if (isInvalidNumber(tryCount)) {
    throw new Error(ERROR_TRY_COUNT_MESSAGE.INVALID_NUMBER);
  }
  if (isNotInteger(tryCount)) {
    throw new Error(ERROR_TRY_COUNT_MESSAGE.INVAILD_INTEGER);
  }
  if (isOutOfRange(tryCount)) {
    throw new Error(ERROR_TRY_COUNT_MESSAGE.INVALID_RANGE);
  }

  return tryCount;
};

export default validateTryCount;
