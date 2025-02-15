import { ERROR_TRY_COUNT_MESSAGE } from "../constants/constants.js";

const validateTryCount = (input) => {
  const tryCount = Number(input);

  if (isNotNumber(tryCount)) throw new Error(ERROR_TRY_COUNT_MESSAGE.INVALID_NUMBER);
  if (isNotInteger(tryCount)) throw new Error(ERROR_TRY_COUNT_MESSAGE.INVAILD_INTEGER);
  if (isNotPositive(tryCount)) throw new Error(ERROR_TRY_COUNT_MESSAGE.INVALID_RANGE);

  return tryCount;
};

const isNotNumber = (value) => Number.isNaN(value);
const isNotInteger = (value) => !Number.isInteger(value);
const isNotPositive = (value) => value <= 0;

export default validateTryCount;
